import '@/styles/globals.css'

import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [region, setRegion] = useState('Region');
  return <Component {...pageProps} region={region} setRegion={setRegion} />
}
