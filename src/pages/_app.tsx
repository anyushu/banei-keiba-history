import '@/styles/globals.css'
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
