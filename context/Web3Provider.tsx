// context/Web3Provider.tsx
'use client';

import { WagmiProvider, createConfig, http } from 'wagmi';
import { injected, metaMask } from 'wagmi/connectors';
import { flowMainnet, flowTestnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useMemo } from 'react';

interface Web3ProviderProps {
  children: ReactNode;
}

export function Web3Provider({ children }: Web3ProviderProps) {
  const config = useMemo(() => {
    const rpcUrl = process.env.NEXT_PUBLIC_FLOW_TESTNET_RPC;
    
    if (!rpcUrl) {
      console.error('NEXT_PUBLIC_FLOW_TESTNET_RPC is not defined');
    }

    return createConfig({
      chains: [flowTestnet, flowMainnet],
      connectors: [
        injected({ 
          target: 'metaMask',
        }),
        metaMask(),
      ],
      transports: {
        [flowTestnet.id]: http(rpcUrl || 'https://testnet.evm.nodes.onflow.org'),
        [flowMainnet.id]: http('https://mainnet.evm.nodes.onflow.org'),
      },
      ssr: true, // Enable SSR support
    });
  }, []);

  const queryClient = useMemo(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  }), []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
