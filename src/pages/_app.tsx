import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

import { queryClient } from "@/services/api";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />;
    </QueryClientProvider>
  );
}

export default MyApp;
