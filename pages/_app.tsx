import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import dynamic from 'next/dynamic'

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Avalanche;

const PangolinProvider = dynamic(
  () => import('@pangolindex/components').then((module) => module.PangolinProvider),
  { ssr: false },
) 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PangolinProvider
      library={undefined}
      chainId={43114}
      account="0xFe139eA54b6a025314a813338d909F9B63fF71A9"
    >
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>thirdweb NFT Drop Minting Customizable Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn How To Use Thirdweb's NFT Drop contract and create a customizable NFT Drop minting page"
        />
        <meta
          name="keywords"
          content="Thirdweb, thirdweb NFT drop, how to make thirdweb nft drop, how to make nft collection thirdweb"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
    </PangolinProvider>
  );
}

export default MyApp;
