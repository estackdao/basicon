import { TokenIcon, ChainIcon, TokenType } from "basicon"
import { getTokenByAddress, getTokenByName, getTokenBySymbol, getAllChains, getChainById, getChainByName, getChainList, getAllTokens, getTokenList } from "basicon";


export default function Home() {
  const token = getTokenList();
  console.log(token);
  const chain = getChainList();
  console.log(chain);
  const tokenBySymbol = getTokenBySymbol("ETH");
  console.log(tokenBySymbol);
  const tokenByName = getTokenByName("Ethereum");
  console.log(tokenByName);
  const tokenByAddress = getTokenByAddress(1, "0x1234567890abcdef");
  console.log(tokenByAddress);
  const chainById = getChainById(1);
  console.log(chainById);
  const chainByName = getChainByName("Ethereum");
  console.log(chainByName);
  const allChains = getAllChains();
  console.log(allChains);
  const allTokens = getAllTokens();
  console.log(tokenByName);
  return (
    <div>
      <h1>Token Icons</h1>
      <TokenIcon symbol="aave" size={32} />
      {token.map((token) => (
        <TokenIcon key={token.symbol} symbol={token.symbol} className="w-24 h-24" />
      ))}
      <h1>Chain Icons</h1>
      {chain.map((chain) => (
        <ChainIcon key={chain.name} name={chain.name} className="w-32 h-32" />
      ))}
    </div>
  );
}
