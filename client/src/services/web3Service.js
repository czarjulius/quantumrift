import Web3 from 'web3';

let web3;
let web3Provider;

if (window.ethereum) {
  web3Provider = window.ethereum;
  try {
    window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error('User denied account access');
  }
} else if (window.web3) {
  web3Provider = window.web3.currentProvider;
} else {
  web3Provider = new Web3.providers.HttpProvider(
    `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`
  );
}

web3 = new Web3(web3Provider);

export default web3;
