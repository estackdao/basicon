import { TokenIcon, ChainIcon } from "basicon"
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
      <TokenIcon name="Ethereum" symbol="ETH" chainId={1} address="0x1234567890abcdef" />
      <TokenIcon name="Bitcoin" symbol="BTC" chainId={1} address="0xabcdef1234567890" />
      <h1>Chain Icons</h1>
      <ChainIcon name="Ethereum" chainId={1} />

    </div>
  );
}
