import { CONFIG } from '../config';

const { INFURA_ID, IPFS_ENDPOINT, BOX_ENDPOINT, NETWORK_CONFIG } = CONFIG;

export { INFURA_ID, IPFS_ENDPOINT, BOX_ENDPOINT };

export const chainIds = {
  matic: 137,
  mumbai: 80001,
  xdai: 100,
  mainnet: 1,
  rinkeby: 4,
  kovan: 42,
};

export const hexChainIds = {
  matic: '0x89',
  mumbai: '0x13881',
  xdai: '0x64',
  mainnet: '0x01',
  rinkeby: '0x04',
  kovan: '0x2a',
};

export const networkLabels = {
  80001: 'Mumbai',
  100: 'xDai',
  1: 'Ethereum',
  3: 'Ropsten',
  4: 'Rinkeby',
  5: 'Görli',
  42: 'Kovan',
  56: 'BSC',
  77: 'Sokol',
  137: 'Matic',
};

export const networkNames = {
  1: 'ETH Mainnet',
  4: 'Rinkeby Testnet',
  42: 'Kovan Testnet',
  100: 'xDai Chain',
  137: 'Polygon Mainnet',
  80001: 'Mumbai Testnet'
};

export const rpcUrls = {
  1: `https://mainnet.infura.io/v3/${INFURA_ID}`,
  4: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
  42: `https://kovan.infura.io/v3/${INFURA_ID}`,
  100: 'https://rpc.xdaichain.com',
  137: 'https://rpc-mainnet.matic.network',
  80001:'https://rpc-mumbai.maticvigil.com'
};

export const explorerUrls = {
  1: 'https://etherscan.io',
  4: 'https://rinkeby.etherscan.io',
  42: 'https://kovan.etherscan.io',
  100: 'https://blockscout.com/poa/xdai',
  137: 'https://polygonscan.com/',
  80001:'https://mumbai.polygonscan.com/'
};

export const nativeSymbols = {
  1: 'ETH',
  4: 'ETH',
  42: 'ETH',
  100: 'XDAI',
  137: 'MATIC',
  80001: 'MATIC'
};

export const graphUrls = {
  1: `https://api.thegraph.com/subgraphs/name/${NETWORK_CONFIG[1].SUBGRAPH}`,
  4: `https://api.thegraph.com/subgraphs/name/${NETWORK_CONFIG[4].SUBGRAPH}`,
  100: `https://api.thegraph.com/subgraphs/name/${NETWORK_CONFIG[100].SUBGRAPH}`,
  137: `https://api.thegraph.com/subgraphs/name/${NETWORK_CONFIG[137].SUBGRAPH}`,
  80001: `https://api.thegraph.com/subgraphs/name/${NETWORK_CONFIG[80001].SUBGRAPH}`,
};

export const tokens = {
  1: Object.keys(NETWORK_CONFIG[1].TOKENS),
  4: Object.keys(NETWORK_CONFIG[4].TOKENS),
  100: Object.keys(NETWORK_CONFIG[100].TOKENS),
  137: Object.keys(NETWORK_CONFIG[137].TOKENS),
  80001: Object.keys(NETWORK_CONFIG[80001].TOKENS),
};

export const tokenInfo = {
  1: NETWORK_CONFIG[1].TOKENS,
  4: NETWORK_CONFIG[4].TOKENS,
  100: NETWORK_CONFIG[100].TOKENS,
  137: NETWORK_CONFIG[137].TOKENS,
  80001: NETWORK_CONFIG[80001].TOKENS,
};

export const resolvers = {
  1: Object.keys(NETWORK_CONFIG[1].RESOLVERS),
  4: Object.keys(NETWORK_CONFIG[4].RESOLVERS),
  100: Object.keys(NETWORK_CONFIG[100].RESOLVERS),
  137: Object.keys(NETWORK_CONFIG[137].RESOLVERS),
  80001: Object.keys(NETWORK_CONFIG[80001].RESOLVERS),
};

export const resolverInfo = {
  1: NETWORK_CONFIG[1].RESOLVERS,
  4: NETWORK_CONFIG[4].RESOLVERS,
  100: NETWORK_CONFIG[100].RESOLVERS,
  137: NETWORK_CONFIG[137].RESOLVERS,
  80001: NETWORK_CONFIG[80001].RESOLVERS,
};

export const wrappedNativeToken = {
  1: NETWORK_CONFIG[1].WRAPPED_NATIVE_TOKEN,
  4: NETWORK_CONFIG[4].WRAPPED_NATIVE_TOKEN,
  100: NETWORK_CONFIG[100].WRAPPED_NATIVE_TOKEN,
  137: NETWORK_CONFIG[137].WRAPPED_NATIVE_TOKEN,
  80001: NETWORK_CONFIG[80001].WRAPPED_NATIVE_TOKEN,
};

export const invoiceFactory = {
  1: NETWORK_CONFIG[1].INVOICE_FACTORY,
  4: NETWORK_CONFIG[4].INVOICE_FACTORY,
  100: NETWORK_CONFIG[100].INVOICE_FACTORY,
  137: NETWORK_CONFIG[137].INVOICE_FACTORY,
  80001: NETWORK_CONFIG[80001].INVOICE_FACTORY,
};

export const SUPPORTED_NETWORKS = Object.keys(NETWORK_CONFIG).map(n =>
  Number(n),
);

export const INVOICE_VERSION = 'smart-invoice-v0';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';

export const STEPS = {
  1: {
    step_title: 'Project Details',
    step_details: [
      'Note: All invoice data will be stored publicly on IPFS and can be viewed by anyone.',
      'If you have privacy concerns, we recommend taking care to add permissions to your project agreement document.',
    ],
    next: 'payment details',
  },
  2: {
    step_title: 'Payment Details',
    step_details: [],
    next: 'set payment amounts',
  },
  3: {
    step_title: 'Payment Chunks',
    step_details: [],
    next: 'confirmation',
  },
  4: {
    step_title: 'Confirmation',
    step_details: [],
    next: 'create invoice',
  },
};
