import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css'
import 'swiper/css/effect-fade'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { defaultSeo } from '@/utils/next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
