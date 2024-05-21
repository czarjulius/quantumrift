import React, { useEffect, useState, useCallback } from 'react';
import web3 from '../services/web3Service';

const BlockchainStatus = () => {
  const [connected, setConnected] = useState(false);
  const [latestBlock, setLatestBlock] = useState('');

  const checkConnection = useCallback(async () => {
    try {
      const network = await web3.eth.net.isListening();
      setConnected(network);

      const blockNumber = await web3.eth.getBlockNumber();
      setLatestBlock(blockNumber.toString());
    } catch (error) {
      console.error('Error connecting to blockchain:', error);
      setConnected(false);
    }
  }, []);

  useEffect(() => {
    checkConnection();
  }, [checkConnection, connected]);

  return (
    <div className="text-start mb-4 mt-4">
      {connected ? (
        <div>
          <h4>Blockchain Status:</h4>
          <p>
            status:
            <span className={connected ? 'text-green-800' : 'text-gray-400'}>
              {connected ? ' Connected' : ' Disconnected'}
            </span>
          </p>
          <p>
            block no:
            <span className={latestBlock ? 'text-green-800' : 'text-gray-400'}>
              {latestBlock !== null ? latestBlock : 'nil'}
            </span>
          </p>
        </div>
      ) : (
        <div className="w-full px-3">
          <button
            className="text-white w-1/4 bg-blue-500 text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="button"
            onClick={checkConnection}
          >
            Connect Metamask
          </button>
        </div>
      )}
    </div>
  );
};

export default BlockchainStatus;
