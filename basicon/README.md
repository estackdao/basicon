## Basicon

Basicon is a minimal, trusted npm dependency for chain and token metadata & SVG icons. All locally served, no dynamic fetch, fully type-safe.

### Install

```bash
pnpm install basicon
```

### Usage

```tsx
import { getTokenByAddress, getTokenByName, getTokenBySymbol, getAllChains, getChainById, getChainByName, getChainList, getAllTokens, getTokenList } from "basicon";

const token = getTokenList(); 
const chain = getChainList({ chainIds: [1, 10, 42161] });
const tokenBySymbol = getTokenBySymbol("ETH");
const tokenByName = getTokenByName("Ethereum");
const tokenByAddress = getTokenByAddress(1, "0x1234567890abcdef");
const chainById = getChainById(1);
const chainByName = getChainByName("Ethereum");
const allChains = getAllChains();
const allTokens = getAllTokens();

```

```tsx

import { TokenIcon, ChainIcon } from "basicon"

<TokenIcon key={token.symbol} symbol={token.symbol} className="w-24 h-24" />
<ChainIcon key={chain.name} name={chain.name} className="w-32 h-32" />

```


```tsx

chain metadata:

{
  "chainId": 1,
  "name": "Ethereum",
  "explorer": "https://etherscan.io",
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "testnets": [
    {
      "chainId": 17000,
      "name": "Holesky",
      "explorer": "https://holesky.etherscan.io/",
      "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
      }
    }
  ]
}

token metadata:

{
  "id": "reth",
  "name": "Rocket Pool ETH",
  "symbol": "rETH",
  "addresses": [
    {
      "chainId": 1,
      "address": "0xae78736cd615f374d3085123a210448e74fc6393",
      "decimals": 18,
      "type": "ERC20"
    },
    {
      "chainId": 42161,
      "address": "0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8",
      "decimals": 18,
      "type": "ERC20"
    },
    {
      "chainId": 10,
      "address": "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
      "decimals": 18,
      "type": "ERC20"
    },
    {
      "chainId": 8453,
      "address": "0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c",
      "decimals": 18,
      "type": "ERC20"
    },
    {
      "chainId": 137,
      "address": "0x0266f4f08d82372cf0fcbccc0ff74309089c74d1",
      "decimals": 18,
      "type": "ERC20"
    }
  ]
}

```

Basicon allows full flexibility in how icons are deployed and rendered:
- You can fork the icon directory to host the raw SVG icons on your own CDN.
- Use the provided metadata to define your own custom <TokenIcon /> or <ChainIcon /> components, tailored to your frontend needs.


### Submit Info

#### Meta

- token/chain metadata: [basicon\src\data](./basicon/src/data)
- token/chain svg component: [basicon\src\generated](./basicon/src/generated)

#### Icon

- Format: SVG
- Chain Icon: [basicon/icon/chain](./basicon/icon/chain)
- Token Icon: [basicon/icon/token](./basicon/icon/chain)