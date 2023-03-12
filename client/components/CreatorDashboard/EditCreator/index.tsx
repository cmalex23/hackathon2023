import React, { useEffect, useMemo, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography
} from '@mui/material';
import TitleView from '../../TitleView';
import CreatorCompaigns from '../CreatorCompaigns';
import CreateExpModal from '../../CreateExpModal';

import s from './EditCreator.module.css';
import { smartContract } from '../../Dahsboard/Actions/helpers/smartContract';
import { useGetAccount, useGetNetworkConfig } from '@multiversx/sdk-dapp/hooks';
import { ProxyNetworkProvider } from '@multiversx/sdk-network-providers/out';
import {
  ContractFunction,
  ResultsParser,
  AddressValue,
  Address
} from '@multiversx/sdk-core/out';

const resultsParser = new ResultsParser();

const EditCreator = ({ creator }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [experienceSymbol, setExperienceSymbol] = useState<string>();

  const proxy = useMemo(() => {
    return new ProxyNetworkProvider(network);
  }, [network]);

  useEffect(() => {
    const getFromQuery = async () => {
      try {
        const query = smartContract.createQuery({
          func: new ContractFunction('getUserNft'),
          args: [new AddressValue(new Address(address))]
        });
        const queryResponse = await proxy.queryContract(query);

        const endpointDefinition = smartContract.getEndpoint('getUserNft');

        const { firstValue: amount } = resultsParser.parseQueryResponse(
          queryResponse,
          endpointDefinition
        );

        console.log('amount', amount);
        setExperienceSymbol(amount?.valueOf()?.toString(10));
      } catch (err) {
        console.error('Unable to call getUserNft', err);
      }
    };

    getFromQuery().catch(console.error);
  }, [address, proxy]);

  return (
    <Container className={'text-center'}>
      <h1>Welcome {creator.name}</h1>
      <Card sx={{ mt: 2, display: 'inline-block' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          Token Name : {creator.tokenName}
          <br />
          Token Symbol : {creator.tokenSymbol}
          <br />
        </CardContent>
      </Card>
      <TitleView className={s.title}>My Compaigns</TitleView>
      <CreatorCompaigns />
      <TitleView className={s.title}>My Experiences</TitleView>

      <Button
        onClick={() => setIsOpen(true)}
        sx={{ mt: 2 }}
        startIcon={<AddIcon />}
      >
        Create Experience
      </Button>

      {isOpen && <CreateExpModal handleClose={() => setIsOpen(false)} />}

      {experienceSymbol && (
        <Card sx={{ mt: 2 }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant='h5'>Experience 1</Typography>
            {experienceSymbol && (
              <Typography variant='h5'>
                Your Experience Symbol: {experienceSymbol}
              </Typography>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default EditCreator;
