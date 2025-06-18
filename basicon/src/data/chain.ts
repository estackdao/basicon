const chainData = [
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
  },
  {
    "chainId": 2714,
    "name": "Abstract",
    "explorer": "https://abscan.org/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 11124,
        "name": "Abstract",
        "explorer": "https://sepolia.abscan.org/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 43114,
    "name": "Avalanche C-Chain",
    "explorer": "https://snowscan.xyz/",
    "nativeCurrency": {
      "name": "Avalanche",
      "symbol": "AVAX",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 43113,
        "name": "Avalanche Fuji Testnet",
        "icon": {
          "light": "icons/chain/avalanche.light.svg",
          "dark": "icons/chain/avalanche.dark.svg"
        },
        "explorer": "https://testnet.snowscan.xyz/",
        "nativeCurrency": {
          "name": "Avalanche",
          "symbol": "AVAX",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 42161,
    "name": "Arbitrum",
    "explorer": "https://arbiscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 421614,
        "name": "Arbitrum Sepolia",
        "icon": {
          "light": "icons/chain/arbitrum.light.svg",
          "dark": "icons/chain/arbitrum.dark.svg"
        },
        "explorer": "https://sepolia.arbiscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 8453,
    "name": "Base",
    "explorer": "https://basescan.org",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 84532,
        "name": "Base Sepolia Testnet",
        "explorer": "https://sepolia.basescan.org/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 80094,
    "name": "Berachain",
    "explorer": "https://berascan.com/",
    "nativeCurrency": {
      "name": "BERA",
      "symbol": "BERA",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 80069,
        "name": "Berachain Bepolia",
        "explorer": "https://bepolia.beratrail.io/",
        "nativeCurrency": {
          "name": "BERA",
          "symbol": "BERA",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 81457,
    "name": "Blast",
    "explorer": "https://blastscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 168587773,
        "name": "Blast Sepolia Testnet",
        "explorer": "https://testnet.blastscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 60808,
    "name": "BOB",
    "explorer": "https://explorer.gobob.xyz/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 808813,
        "name": "BOB Sepolia",
        "explorer": "https://bob-sepolia.explorer.gobob.xyz/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 56,
    "explorer": "https://bscscan.com/",
    "nativeCurrency": {
      "name": "bnb",
      "symbol": "BNB",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 97,
        "name": "BNB Testnet",
        "explorer": "https://testnet.bscscan.com/",
        "nativeCurrency": {
          "name": "bnb",
          "symbol": "BNB",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 42220,
    "name": "Celo",
    "explorer": "https://celoscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 44787,
        "name": "Celo Alfajores",

        "explorer": "https://alfajores.celoscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 252,
    "name": "Fraxtal",
    "explorer": "https://fraxscan.com",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 2522,
        "name": "Fraxtal Testnet",
        "explorer": "https://holesky.fraxscan.com/",
        "nativeCurrency": {
          "name": "Frax",
          "symbol": "FRAX",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 100,
    "name": "Gnosis",
    "explorer": "https://gnosisscan.io",
    "nativeCurrency": {
      "name": "xDai",
      "symbol": "xDai",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 10200,
        "name": "Gnosis Chiado Testnet",
        "explorer": "https://gnosis-chiado.blockscout.com/",
        "nativeCurrency": {
          "name": "xDai",
          "symbol": "xDai",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 999,
    "name": "Hyperliquid",
    "explorer": "https://purrsec.com/",
    "nativeCurrency": {
      "name": "Hyper",
      "symbol": "HYPE",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 998,
        "name": "Gnosis Chiado Testnet",
        "explorer": "https://https://testnet.purrsec.com/",
        "nativeCurrency": {
          "name": "Hyper",
          "symbol": "HYPE",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 57073,
    "name": "Ink",
    "explorer": "https://explorer.inkonchain.com",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "Ether",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 763373,
        "name": "Ink Sepolia",
        "explorer": "https://explorer-sepolia.inkonchain.com/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "Ether",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 232,
    "name": "Lens",
    "explorer": "https://explorer.lens.xyz/",
    "nativeCurrency": {
      "name": "GHO",
      "symbol": "GHO",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 37111,
        "name": "Lens Chain Testnet",
        "explorer": "https://explorer.testnet.lens.xyz",
        "nativeCurrency": {
          "name": "Grass",
          "symbol": "GRASS",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 59144,
    "name": "Linea",
    "explorer": "https://lineascan.build/",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 59141,
        "name": "Linea Sepolia",
        "explorer": "https://sepolia.lineascan.build/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1135,
    "name": "Lisk",
    "explorer": "https://blockscout.lisk.com/",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 4202,
        "name": "Lisk Sepolia Testnet",
        "explorer": "https://sepolia-blockscout.lisk.com/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 5000,
    "name": "Mantle",
    "explorer": "https://mantlescan.xyz",
    "nativeCurrency": {
      "name": "Mantle",
      "symbol": "MNT",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 5003,
        "name": "Mantle Sepolia Testnet",
        "explorer": "https://explorer.sepolia.mantle.xyz/",
        "nativeCurrency": {
          "name": "Mantle",
          "symbol": "MNT",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1750,
    "name": "Metal",
    "explorer": "https://explorer.metall2.com/",
    "nativeCurrency": {
      "name": "ETH",
      "symbol": "Ether",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1740,
        "name": "Metal L2 Testnet",
        "explorer": "https://testnet.explorer.metall2.com/",
        "nativeCurrency": {
          "name": "ETH",
          "symbol": "Ether",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1088,
    "name": "Metis",
    "explorer": "https://andromeda-explorer.metis.io",
    "nativeCurrency": {
      "name": "Metis",
      "symbol": "METIS",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 588,
        "name": "Metis Sepolia Testnet",
        "explorer": "https://sepolia-explorer.metisdevops.link/",
        "nativeCurrency": {
          "name": "Metis",
          "symbol": "METIS",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 34443,
    "name": "Mode",
    "explorer": "https://modescan.io/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 919,
        "name": "Mode Testnet",
        "explorer": "https://testnet.modescan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 137,
    "name": "Polygon",
    "explorer": "https://polygonscan.com",
    "nativeCurrency": {
      "name": "Polygon",
      "symbol": "POL",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 80002,
        "name": "Amoy",
        "explorer": "http://amoy.polygonscan.com/",
        "nativeCurrency": {
          "name": "Polygon",
          "symbol": "POL",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 10,
    "name": "Optimism",
    "explorer": "https://optimistic.etherscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 11155420,
        "name": "OP Sepolia Testnet",
        "explorer": "http://sepolia-optimism.etherscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 534352,
    "name": "Scroll",
    "explorer": "https://scrollscan.com",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 534351,
        "name": "Scroll Sepolia Testnet",
        "explorer": "https://sepolia.scrollscan.com/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1329,
    "name": "Sei",
    "explorer": "https://seitrace.com/?chain=pacific-1",
    "nativeCurrency": {
      "name": "Sei",
      "symbol": "SEI",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1328,
        "name": "Sei Testnet",
        "explorer": "https://seitrace.com/?chain=atlantic-2",
        "nativeCurrency": {
          "name": "Sei",
          "symbol": "SEI",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 1868,
    "name": "Soneium",
    "explorer": "https://soneium.blockscout.com/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1946,
        "name": "Soneium Testnet Minato",
        "explorer": "https://soneium-minato.blockscout.com/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 146,
    "name": "Sonic",
    "explorer": "https://sonicscan.org/",
    "nativeCurrency": {
      "name": "Sonic",
      "symbol": "S",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 57054,
        "name": "Sonic Testnet",
        "explorer": "https://testnet.sonicscan.org/",
        "nativeCurrency": {
          "name": "Sonic",
          "symbol": "S",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 146,
    "name": "Swell Chain",
    "explorer": "https://explorer.swellnetwork.io/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1924,
        "name": "Swellchain Testnet",
        "explorer": "https://swell-testnet-explorer.alt.technology/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 167000,
    "name": "Taiko",
    "explorer": "https://taikoscan.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 167009,
        "name": "Taiko Hekla",
        "explorer": "https://hekla.taikoscan.io/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 130,
    "name": "Unichain",
    "explorer": "https://uniscan.xyz/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 1301,
        "name": "Unichain Sepolia Testnet",
        "explorer": "https://sepolia.uniscan.xyz/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 480,
    "name": "Worldchain",
    "explorer": "https://worldscan.org/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 4801,
        "name": "World Chain Sepolia Testnet",
        "explorer": "https://sepolia.worldscan.org/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 324,
    "name": "zkSync",
    "explorer": "https://explorer.zksync.io",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 300,
        "name": "ZKsync Sepolia Testnet",
        "explorer": "https://sepolia-era.zksync.network/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  },
  {
    "chainId": 7777777,
    "name": "Zora",
    "explorer": "https://explorer.zora.energy/",
    "nativeCurrency": {
      "name": "Ether",
      "symbol": "ETH",
      "decimals": 18
    },
    "testnets": [
      {
        "chainId": 999999999,
        "name": "Zora Sepolia Testnet",
        "explorer": "https://sepolia.explorer.zora.energy/",
        "nativeCurrency": {
          "name": "Ether",
          "symbol": "ETH",
          "decimals": 18
        }
      }
    ]
  }
]

export default chainData