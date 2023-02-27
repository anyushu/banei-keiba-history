import '@/styles/globals.css'
import 'react-medium-image-zoom/dist/styles.css'
import 'swiper/css'
import 'swiper/css/effect-fade'

import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

import { defaultSeo } from '@/utils/next-seo.config'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  window.onorientationchange = function () {
    switch (window.orientation) {
      case 0:
        break
      case 90:
        alert('画面を縦にしてください')
        break
      case -90:
        alert('画面を縦にしてください')
        break
    }
  }
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
