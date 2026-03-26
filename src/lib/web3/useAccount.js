import { getAccount, watchAccount } from '@wagmi/core'
import { useEffect, useState } from 'react'
import { config } from './connections.js'

export function useAccount() {
  const [accountData, setAccountData] = useState(undefined)

  useEffect(() => {
    const account = getAccount(config)
    setAccountData(account)
    const unwatch = watchAccount(config, {
      onChange: (acc) => setAccountData(acc),
    })
    return () => unwatch()
  }, [])

  return (
    accountData ?? {
      address: null,
      addresses: [],
      chainId: null,
      isConnected: false,
    }
  )
}
