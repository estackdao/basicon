import * as React from 'react';

declare type ChainNativaCurrency = {
    name: string;
    symbol: string;
    decimals: number;
};
declare type Testnet = {
    chainId: number;
    name: string;
    icon: ChainIcon;
    explorer: string;
    nativeCurrency: ChainNativaCurrency;
};
declare type ChainFilters = {
    chainIds?: number[];
    nameContains?: string;
};
declare type Chain = {
    chainId: number;
    name: string;
    icon: ChainIcon;
    explorer: string;
    nativeCurrency: ChainNativaCurrency;
    testnets: Testnet[];
};
declare type TokenType = "ERC20" | "BEP20" | "Native";
declare type TokenAddress = {
    chainId: number;
    address: string;
    decimals: number;
    type: TokenType;
};
declare type Token = {
    id: string;
    name: string;
    symbol: string;
    icon: string;
    addresses: TokenAddress[];
};
declare type TokenFilters = {
    symbols?: string[];
    nameContains?: string;
};
declare type TokenIconProps = {
    name?: string;
    symbol?: string;
    chainId?: number;
    address?: string;
    size?: number;
    className?: string;
    alt?: string;
};
declare type ChainIconProps = {
    chainId?: number;
    name?: string;
    size?: number;
    className?: string;
    alt?: string;
    theme?: 'light' | 'dark';
};
declare function getAllChains(): Chain[];
declare function getChainById(chainId: number): Chain | undefined;
declare function getChainByName(name: string): Chain | undefined;
declare function getChainList(filters?: ChainFilters): Chain[];
declare function getAllTokens(): Token[];
declare function getTokenBySymbol(symbol: string, chainId?: number): Token | undefined;
declare function getTokenByName(name: string, chainId?: number): Token | undefined;
declare function getTokenByAddress(chainId: number, address: string): Token;
declare function getTokenList(filters?: TokenFilters): Token[];
declare function TokenIcon({ name, symbol, chainId, address, size, className, alt }: TokenIconProps): React.JSX.Element;
declare type ChainIcon = {
    light: string;
    dark: string;
};
declare function ChainIcon({ chainId, name, size, className, alt, theme }: ChainIconProps): React.JSX.Element;

export { ChainIcon, TokenIcon, getAllChains, getAllTokens, getChainById, getChainByName, getChainList, getTokenByAddress, getTokenByName, getTokenBySymbol, getTokenList };
