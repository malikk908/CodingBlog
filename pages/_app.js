import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>



  <Component {...pageProps} />
  </>
}
