import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import UserContextProvider from "../src/context/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}
