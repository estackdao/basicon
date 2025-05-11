import chainData from "../data/chain.json";
import tokenData from '../data/token.json';

type ChainIcon = {
  light: string;
  dark: string;
}

type ChainNativaCurrency = {
  name: string;
  symbol: string;
  decimals: number;
}

type Testnet = {
  chainId: number;
  name: string;
  icon: ChainIcon;
  explorer: string;
  nativeCurrency: ChainNativaCurrency;
}

type ChainFilters = {
  chainIds?: number[];
  nameContains?: string;
}

type Chain = {
  chainId: number;
  name: string;
  icon: ChainIcon;
  explorer: string;
  nativeCurrency: ChainNativaCurrency;
  testnets: Testnet[];
}

type TokenType = "ERC20" | "BEP20" | "Native";

type TokenAddress = {
  chainId: number;
  address: string;
  decimals: number;
  type: TokenType;
}

type Token = {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  addresses: TokenAddress[];
}

type TokenFilters = {
  symbols?: string[];
  nameContains?: string;
}


type Chains = Chain[];
type Tokens = Token[];


const chains = chainData as Chains;
const tokens = tokenData as Tokens;

export function getAllChains(): Chain[] {
  return [...chains];
}

export function getChainById(chainId: number): Chain | undefined {
  return chains.find(chain => chain.chainId === chainId);
}

export function getChainByName(name: string): Chain | undefined {
  const lowerName = name.toLowerCase();
  return chains.find(chain => chain.name.toLowerCase() === lowerName);
}

export function getChainList(filters: ChainFilters = {}): Chain[] {
  let result = [...chains];

  if (filters.chainIds && filters.chainIds.length > 0) {
    const idSet = new Set(filters.chainIds);
    result = result.filter(chain => idSet.has(chain.chainId));
  }

  if (filters.nameContains) {
    const lowerNameContains = filters.nameContains.toLowerCase();
    result = result.filter(chain => chain.name.toLowerCase().includes(lowerNameContains));
  }

  return result;
}

export function getAllTokens(): Token[] {
  return [...tokens];
}

export function getTokenBySymbol(symbol: string, chainId?: number): Token | undefined {
  const lowerSymbol = symbol.toLowerCase();
  const candidates = tokens.filter(token => token.symbol.toLowerCase() === lowerSymbol);
  if (chainId === undefined || candidates.length <= 1) {
    return candidates[0];
  }
  return candidates.find(token => token.addresses.some(addr => addr.chainId === chainId)) || candidates[0];
}

export function getTokenByName(name: string, chainId?: number): Token | undefined {
  const lowerName = name.toLowerCase();
  const candidates = tokens.filter(token => token.name.toLowerCase() === lowerName);
  if (chainId === undefined || candidates.length <= 1) {
    return candidates[0];
  }
  return candidates.find(token => token.addresses.some(addr => addr.chainId === chainId)) || candidates[0];
}

export function getTokenList(filters: TokenFilters = {}): Token[] {
  let result = [...tokens];

  if (filters.symbols && filters.symbols.length > 0) {
    const symbolSet = new Set(filters.symbols.map(s => s.toLowerCase()));
    result = result.filter(token => symbolSet.has(token.symbol.toLowerCase()));
  }

  if (filters.nameContains) {
    const lowerNameContains = filters.nameContains.toLowerCase();
    result = result.filter(token => token.name.toLowerCase().includes(lowerNameContains));
  }

  return result;
}