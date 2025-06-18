import {
  chain_exports
} from "./chunk-4KQF53FJ.mjs";
import "./chunk-JY35AS4P.mjs";
import "./chunk-SHJRMLHH.mjs";
import "./chunk-VCENXJQB.mjs";
import "./chunk-ZF6S67WM.mjs";
import "./chunk-4ATFJPDY.mjs";
import "./chunk-53QL2PMG.mjs";
import "./chunk-D4X6E7Y7.mjs";
import "./chunk-OMAMRDAP.mjs";
import "./chunk-67KNTKWZ.mjs";
import "./chunk-VJIEUG4J.mjs";
import "./chunk-YYOUXOL6.mjs";
import "./chunk-DP4NHMHC.mjs";
import "./chunk-NDS75V6D.mjs";
import "./chunk-HSKN26H5.mjs";
import "./chunk-5FFGBF5G.mjs";
import "./chunk-IXB4A5H2.mjs";
import "./chunk-4JJNFURO.mjs";
import "./chunk-3MQRLZTK.mjs";
import "./chunk-JXZWIFQ3.mjs";
import "./chunk-HD7QVSB4.mjs";
import "./chunk-A32BAYIO.mjs";
import "./chunk-CNJFF4R7.mjs";
import "./chunk-MLRMFFYJ.mjs";
import "./chunk-3ZAQZTFO.mjs";
import "./chunk-UHGJOLRW.mjs";
import "./chunk-7AILBSTJ.mjs";
import "./chunk-UDX6Z4KK.mjs";
import "./chunk-LQ7XYGGK.mjs";
import "./chunk-XBMDDSY2.mjs";
import "./chunk-A63AARW2.mjs";
import "./chunk-HQJ2ME33.mjs";
import "./chunk-OIPOFXAR.mjs";
import "./chunk-LBHCWASL.mjs";
import "./chunk-TOVWMTYO.mjs";
import "./chunk-ZGYQ5PJU.mjs";
import "./chunk-H4MQQ7QG.mjs";
import "./chunk-AJIJLXK7.mjs";
import "./chunk-GNWSTWTR.mjs";
import "./chunk-N3WWXV4I.mjs";
import "./chunk-5VJIPQVT.mjs";
import "./chunk-MOODSPMZ.mjs";
import "./chunk-X74V3OAK.mjs";
import "./chunk-RX4QUFDI.mjs";
import "./chunk-EHOIXWF3.mjs";
import "./chunk-ERF2FVMX.mjs";
import "./chunk-IYQSMH2M.mjs";
import "./chunk-BHF25TED.mjs";
import "./chunk-T5QDNZOB.mjs";
import "./chunk-3HGLFRHT.mjs";
import "./chunk-IW2INBC5.mjs";
import "./chunk-3GMKPS4Q.mjs";
import "./chunk-QMUNSRZJ.mjs";
import "./chunk-HUF3DXYD.mjs";
import "./chunk-G6FRU22Y.mjs";
import "./chunk-XFY2IB4G.mjs";
import "./chunk-TD4QOCMU.mjs";
import "./chunk-XYL5NUD2.mjs";
import "./chunk-PFHSUF5I.mjs";
import "./chunk-FEDLYXXK.mjs";
import "./chunk-YW764E4Y.mjs";
import "./chunk-6E5RWGJ4.mjs";
import "./chunk-46GQFRON.mjs";
import "./chunk-BQHBHMW5.mjs";
import "./chunk-KI3XUI46.mjs";
import "./chunk-H7BR5TA6.mjs";
import "./chunk-V3JCR7ZJ.mjs";
import "./chunk-NPER3MUC.mjs";
import "./chunk-BMWXV5GY.mjs";
import {
  token_exports
} from "./chunk-2SW35UA2.mjs";
import "./chunk-BWPZHGBH.mjs";
import "./chunk-C57S2BPX.mjs";
import "./chunk-I6EZUQRX.mjs";
import "./chunk-G3M3JYYV.mjs";
import "./chunk-NJJXQS77.mjs";
import "./chunk-35DJMJRZ.mjs";
import "./chunk-Z6NM7PGE.mjs";
import "./chunk-O3PMMRNX.mjs";
import "./chunk-DBDNTP5N.mjs";
import "./chunk-E3VBBIE6.mjs";
import "./chunk-JFVAGK5S.mjs";
import "./chunk-WZ3HFFGI.mjs";
import "./chunk-OUROL75H.mjs";
import "./chunk-ESEDAG24.mjs";
import "./chunk-7GCSQEU4.mjs";
import "./chunk-KI7ALZDC.mjs";
import "./chunk-L7XWEX3R.mjs";
import "./chunk-UGDDOY4O.mjs";
import "./chunk-V7V73JEM.mjs";
import "./chunk-CT2RBTWD.mjs";
import "./chunk-DKFHEAQV.mjs";
import "./chunk-RMDXFCM3.mjs";
import "./chunk-6ILZFJ2Z.mjs";
import "./chunk-XIY5LJHN.mjs";
import "./chunk-G7GUUZJU.mjs";
import "./chunk-FIK32BU4.mjs";
import "./chunk-NX4OFK2P.mjs";
import "./chunk-HFLJENIL.mjs";
import "./chunk-4UG2Q32C.mjs";
import "./chunk-OGF2Q22G.mjs";
import "./chunk-MQSZNGJA.mjs";
import "./chunk-L6LR47R5.mjs";
import "./chunk-KFPAGSRY.mjs";
import "./chunk-6RCESC5P.mjs";
import "./chunk-XN4TQUBJ.mjs";
import "./chunk-DQIQNZKG.mjs";
import "./chunk-UUD3PLUJ.mjs";
import {
  chain_default
} from "./chunk-FCUAGMLN.mjs";
import {
  token_default
} from "./chunk-PFRTCTDT.mjs";
import "./chunk-O2ZSS2WJ.mjs";
import "./chunk-E6NQIVWI.mjs";
import "./chunk-Q5FM5DRU.mjs";
import "./chunk-WMSFAVG2.mjs";
import "./chunk-43I3PAP2.mjs";
import "./chunk-QK4PKNB3.mjs";

// src/index.tsx
import { jsx } from "react/jsx-runtime";
var chains = chain_default;
var tokens = token_default;
function getAllChains() {
  return [...chains];
}
function getChainById(chainId) {
  return chains.find((chain) => chain.chainId === chainId);
}
function getChainByName(name) {
  const lowerName = name.toLowerCase();
  return chains.find((chain) => chain.name.toLowerCase() === lowerName);
}
function getChainList(filters = {}) {
  let result = [...chains];
  if (filters.chainIds && filters.chainIds.length > 0) {
    const idSet = new Set(filters.chainIds);
    result = result.filter((chain) => idSet.has(chain.chainId));
  }
  if (filters.nameContains) {
    const lowerNameContains = filters.nameContains.toLowerCase();
    result = result.filter((chain) => chain.name.toLowerCase().includes(lowerNameContains));
  }
  return result;
}
function getAllTokens() {
  return [...tokens];
}
function getTokenBySymbol(symbol, chainId) {
  const lowerSymbol = symbol.toLowerCase();
  const candidates = tokens.filter((token) => token.symbol.toLowerCase() === lowerSymbol);
  if (chainId === void 0 || candidates.length <= 1) {
    return candidates[0];
  }
  return candidates.find((token) => token.addresses.some((addr) => addr.chainId === chainId)) || candidates[0];
}
function getTokenByName(name, chainId) {
  const lowerName = name.toLowerCase();
  const candidates = tokens.filter((token) => token.name.toLowerCase() === lowerName);
  if (chainId === void 0 || candidates.length <= 1) {
    return candidates[0];
  }
  return candidates.find((token) => token.addresses.some((addr) => addr.chainId === chainId)) || candidates[0];
}
function getTokenByAddress(chainId, address) {
  return tokens.find(
    (t) => t.addresses.some(
      (a) => a.chainId === chainId && a.address.toLowerCase() === address.toLowerCase()
    )
  );
}
function getTokenList(filters = {}) {
  let result = [...tokens];
  if (filters.symbols && filters.symbols.length > 0) {
    const symbolSet = new Set(filters.symbols.map((s) => s.toLowerCase()));
    result = result.filter((token) => symbolSet.has(token.symbol.toLowerCase()));
  }
  if (filters.nameContains) {
    const lowerNameContains = filters.nameContains.toLowerCase();
    result = result.filter((token) => token.name.toLowerCase().includes(lowerNameContains));
  }
  return result;
}
function TokenIcon({
  name,
  symbol,
  chainId,
  address,
  size = 48,
  className = ""
}) {
  let token = void 0;
  if (chainId && address) {
    token = getTokenByAddress(chainId, address);
  } else if (symbol) {
    token = getTokenBySymbol(symbol);
  } else if (name) {
    token = getTokenByName(name);
  }
  if (!token || !token.symbol)
    return null;
  const key = token.symbol.toLowerCase();
  const Icon = token_exports[key];
  console.log(Icon, token?.name, token?.symbol.toLowerCase());
  if (!Icon)
    return null;
  return /* @__PURE__ */ jsx(Icon, { width: size, height: size, className });
}
function ChainIcon({
  chainId,
  name,
  size = 24,
  className = "",
  theme = "light"
}) {
  let chain = void 0;
  if (chainId) {
    chain = getChainById(chainId);
  } else if (name) {
    chain = getChainByName(name);
  }
  if (!chain || !chain.name)
    return null;
  const key = `${chain.name.toLowerCase()}_${theme}`;
  const Icon = chain_exports[key];
  if (!Icon)
    return null;
  return /* @__PURE__ */ jsx(Icon, { width: size, height: size, className });
}
export {
  ChainIcon,
  TokenIcon,
  getAllChains,
  getAllTokens,
  getChainById,
  getChainByName,
  getChainList,
  getTokenByAddress,
  getTokenByName,
  getTokenBySymbol,
  getTokenList
};
