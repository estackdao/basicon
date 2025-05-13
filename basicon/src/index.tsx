import * as React from 'react'
import clsx from 'clsx'
import chainData from "./data/chain.json";
import tokenData from './data/token.json';

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

type TokenIconProps = {
  name?: string
  symbol?: string
  chainId?: number
  address?: string
  size?: number
  className?: string
  alt?: string
}

type ChainIconProps = {
  chainId?: number
  name?: string
  size?: number
  className?: string
  alt?: string
  theme?: 'light' | 'dark'
}


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

export function getTokenByAddress(chainId: number, address: string) {
  return tokens.find(t =>
    t.addresses.some(a =>
      a.chainId === chainId && a.address.toLowerCase() === address.toLowerCase()
    )
  )
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

export function TokenIcon({
  name,
  symbol,
  chainId,
  address,
  size = 24,
  className = '',
  alt = 'token icon'
}: TokenIconProps) {
  let token = null

  if (chainId && address) {
    token = getTokenByAddress(chainId, address)
  } else if (symbol) {
    token = getTokenBySymbol(symbol)
  } else if (name) {
    token = getTokenByName(name)
  }

  const iconFile = token?.icon || 'default.svg'
  const src = `/icons/tokens/${iconFile}`

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx(`w-[${size}px] h-[${size}px]`, className)}
      loading="lazy"
    />
  )
}

export function ChainIcon({
  chainId,
  name,
  size = 24,
  className = '',
  alt = 'chain icon',
  theme = 'light'
}: ChainIconProps) {
  let chain = null

  if (chainId) {
    chain = getChainById(chainId)
  } else if (name) {
    chain = getChainByName(name)
  }

  const iconFile = theme === 'dark' ? chain?.icon.dark : chain?.icon.light;
  const src = `/icons/chains/${iconFile}`

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx(`w-[${size}px] h-[${size}px]`, className)}
      loading="lazy"
    />
  )
}