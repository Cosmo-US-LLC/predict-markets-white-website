import { sendTransaction, writeContract, getChainId, switchChain } from '@wagmi/core'
import { Decimal } from 'decimal.js'
import erc20Abi from '../abi/erc20.json'
import bep20Abi from '../abi/bep20.json'

export const rpcMap = {
  1: 'https://rpc.ankr.com/eth',
  56: 'https://bsc-dataseed1.binance.org/',
}

export const getChainIdFromLabel = (label) => {
  return { 'ERC-20': 1, 'BEP-20': 56 }[label?.toUpperCase()] ?? null
}

export const isCurrencyNative = (symbol, chainId) => {
  return { 1: 'ETH', 56: 'BNB' }[chainId] === symbol?.toUpperCase()
}

export const getAbi = (chainId) => {
  return { 1: erc20Abi, 56: bep20Abi }[chainId] ?? null
}

export const getContractAddress = (chainId, symbol) => {
  return (
    {
      1: { USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7' },
      56: {
        BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
      },
    }[chainId]?.[symbol?.toUpperCase()] ?? undefined
  )
}

export const getDecimals = (chainId, symbol) => {
  return (
    {
      1: { USDT: 6, BUSD: 18 },
      56: { USDT: 18, BUSD: 18 },
    }[chainId]?.[symbol?.toUpperCase()] ?? 18
  )
}

const numToBigInt = (num, decimals) => {
  return BigInt(new Decimal(num).mul(new Decimal(10).pow(decimals)).floor().toFixed())
}

export const sendGenericTransaction = async (config, args) => {
  if (args.chainId) {
    const currentChainId = getChainId(config)
    if (currentChainId !== args.chainId) {
      await switchChain(config, {
        chainId: args.chainId,
        addEthereumChainParameter: {
          rpcUrls: [rpcMap[args.chainId.toString()]],
        },
      })
      await new Promise((r) => setTimeout(r, 2000))
    }
  }
  if (args.native) {
    return await sendTransaction(config, {
      to: args.to,
      chainId: args.chainId ?? 1,
      value: numToBigInt(args.value, args.decimals ?? 18),
      data: '0x',
    })
  } else {
    return await writeContract(config, {
      chainId: args.chainId ?? 1,
      abi: args.abi,
      address: args.contractAddress,
      functionName: 'transfer',
      args: [args.to, numToBigInt(args.value, args.decimals ?? 18)],
    })
  }
}
