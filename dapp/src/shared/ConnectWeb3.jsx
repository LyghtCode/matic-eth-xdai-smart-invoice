import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { Loader } from '../components/Loader';
import { Web3Context } from '../context/Web3Context';
import { WalletFilledIcon } from '../icons/WalletFilledIcon';
import { SUPPORTED_NETWORKS } from '../utils/constants';
import { getNetworkName, logError } from '../utils/helpers';
import { Container } from './Container';

export const ConnectWeb3 = () => {
  const { connectAccount, loading, account, disconnect } = useContext(
    Web3Context,
  );

  if (loading) {
    return (
      <Container>
        <Loader size="80" />
      </Container>
    );
  }

  const onClick = async () => {
    try {
      await connectAccount();
    } catch {
      logError("Couldn't connect web3 wallet");
    }
  };

  const NETWORK_NAMES = SUPPORTED_NETWORKS.map(getNetworkName).join(' or ');
  return (
    <Container>
      <Flex
        background="background"
        borderRadius="1rem"
        direction="column"
        align="center"
        w="calc(100% - 2rem)"
        p="2rem"
        maxW="27.5rem"
        mx={4}
        color="white"
      >
        <Flex
          bg="red.500"
          borderRadius="50%"
          p="1rem"
          justify="center"
          align="center"
          color="white"
          mb={4}
        >
          <WalletFilledIcon boxSize="1.75rem" />
        </Flex>
        {loading ? (
          <Text fontSize="2xl" fontFamily="heading" mb={4}>
            Connecting Wallet
          </Text>
        ) : (
          <>
            <Text fontSize="2xl" fontFamily="heading" mb={4}>
              {account ? `Network not supported` : 'Connect Wallet'}
            </Text>
            <Text color="greyText" mb={4} textAlign="center">
              {account
                ? `Please switch to ${NETWORK_NAMES}`
                : 'To get started, connect your wallet'}
            </Text>
          </>
        )}
        {account && !loading ? (
          <Button
            onClick={disconnect}
            colorScheme="red"
            px={12}
            fontFamily="mono"
            fontWeight="normal"
          >
            Disconnect
          </Button>
        ) : (
          <Button
            onClick={onClick}
            colorScheme="red"
            px={12}
            isLoading={loading}
            fontFamily="mono"
            fontWeight="normal"
          >
            Connect
          </Button>
        )}
      </Flex>
    </Container>
  );
};
