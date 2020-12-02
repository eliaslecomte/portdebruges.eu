import '../style/tailwind.css';

import type { AppProps } from 'next/dist/next-server/lib/router/router';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
