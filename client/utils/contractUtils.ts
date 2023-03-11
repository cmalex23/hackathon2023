import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { refreshAccount } from '@multiversx/sdk-dapp/utils';
import { contractAddress } from '../config';

export const issueTokens = async (
  tokenName: string,
  tokenSymbol: string,
  supply: number
) => {
  const pingTransaction = {
    value: 50000000000000000,
    data: `issueFungibleToken@${toHex(tokenName)}@${toHex(tokenSymbol)}@${toHex(
      supply.toString()
    )}`,
    receiver: contractAddress,
    gasLimit: '60000000'
  };
  await refreshAccount();

  const { sessionId /*, error*/ } = await sendTransactions({
    transactions: pingTransaction,
    transactionsDisplayInfo: {
      processingMessage: 'Processing Ping transaction',
      errorMessage: 'An error has occured during Ping',
      successMessage: 'Ping transaction successful'
    },
    redirectAfterSign: false
  });
  return sessionId;
};

function toHex(str: string) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}
