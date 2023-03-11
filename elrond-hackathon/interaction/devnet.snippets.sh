PROXY=https://devnet-gateway.elrond.com
CHAIN_ID="D"
WALLET_ALICE="${PWD}/elrond-hackathon/wallets/alice.pem"
WALLET_BOB="${PWD}/elrond-hackathon/wallets/bob.pem"
CONTRACT_ADDRESS="erd1qqqqqqqqqqqqqpgqhknen0dvljpq3sz4zav3u0uqpvn50rh57wpquscj6f"
ALICE_ADDRESS="erd1aqd2v3hsrpgpcscls6a6al35uc3vqjjmskj6vnvl0k93e73x7wpqtpctqw"
ALICE_ADDRESS_HEX="$(erdpy wallet bech32 --decode ${ALICE_ADDRESS})"
ALICE_ADDRESS_HEXX="0x$(erdpy wallet bech32 --decode ${ALICE_ADDRESS})"
BOB_ADDRESS="erd1wh2rz67zlq5nea7j4lvs39n0yavjlaxal88f744k2ps036ary8dq3ptyd4"
BOB_ADDRESS_HEX="$(erdpy wallet bech32 --decode ${BOB_ADDRESS})"
BOB_ADDRESS_HEXX="0x$(erdpy wallet bech32 --decode ${BOB_ADDRESS})"
MARTA_ADDRESS="erd1uycnjd0epww6xrmn0xjdkfhjengpaf4l5866rlrd8qpcsamrqr8qs6ucxx"
MARTA_ADDRESS_HEX="$(erdpy wallet bech32 --decode ${MARTA_ADDRESS})"
MARTA_ADDRESS_HEXX="0x$(erdpy wallet bech32 --decode ${MARTA_ADDRESS})"

SFT_ADDRESS="erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqzllls8a5w6u"


START_TIMESTAMP=1678485594

deploy() {
 erdpy contract deploy --chain="D" \
    --outfile="elrond-hackathon/interaction/devnet.interaction.json" \
    --project=elrond-hackathon \
    --pem="elrond-hackathon/wallets/alice.pem" \
    --gas-limit=60000000 \
    --proxy=${PROXY} \
    --recall-nonce \
    --send \
    --metadata-payable \
    --arguments ${START_TIMESTAMP}
}
  
upgrade() {
    erdpy contract upgrade ${CONTRACT_ADDRESS} \
    --project=elrond-hackathon \
    --recall-nonce \
    --pem=${WALLET_ALICE} \
    --send \
    --metadata-payable \
    --outfile="elrond-hackathon/interaction/upgrade.json" \
    --proxy=${PROXY} \
    --chain=${CHAIN_ID} \
    --gas-limit=60000000 \
    --arguments ${START_TIMESTAMP}
}

######## SET START TIMESTAMP

setStartTimestamp() {
    erdpy --verbose contract call ${CONTRACT_ADDRESS} \
    --send \
    --proxy=${PROXY} \
    --chain=${CHAIN_ID} \
    --recall-nonce \
    --pem=${WALLET_ALICE} \
    --gas-limit=2500000 \
    --proxy=${PROXY} \
    --function="setStartTimestamp" \
    --arguments ${START_TIMESTAMP}
}

 
getStartTimestamp() {
    erdpy --verbose contract query ${CONTRACT_ADDRESS} \
    --proxy=${PROXY} \
    --function="getStartTimestamp" > ${PWD}/elrond-hackathon/interaction/getTimestamp.json
    }  


## Issue SFT

TOKEN_NAME="HToken"
TOKEN_NAME_HEX="$(echo -n ${TOKEN_NAME} | xxd -p -u | tr -d '\n')"

TOKEN_TICKER="HTKN"
TOKEN_TICKER_HEX="$(echo -n ${TOKEN_TICKER} | xxd -p -u | tr -d '\n')"

SPECIAL_ROLES="canAddSpecialRoles"
SPECIAL_ROLES_HEX="$(echo -n ${SPECIAL_ROLES} | xxd -p -u | tr -d '\n')"

TRUE="true"
TRUE_HEX="$(echo -n ${TRUE} | xxd -p -u | tr -d '\n')"

issueSFT() {
    erdpy --verbose tx new \
    --send \
    --value=50000000000000000 \
    --proxy=${PROXY} \
    --chain=${CHAIN_ID} \
    --pem=${WALLET_ALICE} \
    --recall-nonce \
    --gas-limit=100000000 \
    --receiver=${SFT_ADDRESS} \
    --data="issueSemiFungible@${TOKEN_NAME_HEX}@${TOKEN_TICKER_HEX}@${SPECIAL_ROLES_HEX}@${TRUE_HEX}"  
}
 
setRoleCreate() {
    erdpy --verbose tx new \
    --send \
    --proxy=${PROXY} \
    --chain=${CHAIN_ID} \
    --pem=${WALLET_ALICE} \
    --recall-nonce \
    --gas-limit=100000000 \
    --receiver=${SFT_ADDRESS} \
    --data="setSpecialRole@455343382D343264663464@${ALICE_ADDRESS_HEX}@45534454526F6C654E4654437265617465"  
}

ISSUED_TOKEN="HTKN-54137b"
ISSUED_TOKEN_HEX="$(echo -n ${ISSUED_TOKEN} | xxd -p -u | tr -d '\n')" 

QNT=1000
QNT_HEX="$(echo -n ${QNT} | xxd -p -u | tr -d '\n')" 

createSFT() {
    erdpy --verbose tx new \
    --send \
    --proxy=${PROXY} \
    --chain=${CHAIN_ID} \
    --pem=${WALLET_ALICE} \
    --recall-nonce \
    --gas-limit=100000000 \
    --receiver=${ALICE_ADDRESS} \
    --data="ESDTNFTCreate@0${ISSUED_TOKEN}@${QNT_HEX}@${TOKEN_NAME_HEX}@1d4c@00@6d657461646174613a697066734349442f736f6e672e6a736f6e3b746167733a736f6e672c62656175746966756c2c6d75736963@55524c5f746f5f646563656e7472616c697a65645f73746f726167652f736f6e672e6d7033"  
} 