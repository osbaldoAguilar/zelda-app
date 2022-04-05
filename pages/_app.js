import Image from 'next/image'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
      {/* <Image src='/bg1.svg' layout='fill' objectFit="contain"  alt='Zelda-Bg'/> */}
    <Component {...pageProps} />
  </div>

}

export default MyApp
