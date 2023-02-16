import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

import Layout from '@/components/layouts/CommonLayout'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Next.js - Typescript Boilerplate" />

      <Layout>
        <section className="container mx-auto px-3 py-12">
          <h1 className="mb-6 text-2xl font-bold">Next.js - Typescript Boilerplate</h1>
          <h2 className="mb-3 text-xl">Installed Packages</h2>
          <ol className="ml-6 list-decimal">
            <li>Next SEO</li>
            <li>Next SiteMap</li>
            <li>ESLint</li>
            <li>husky</li>
            <li>lint-staged</li>
            <li>PostCSS</li>
            <li>Prettier</li>
            <li>Tailwind CSS</li>
            <li>Webpack Bundle Analyzer</li>
          </ol>
        </section>
      </Layout>
    </>
  )
}

export default Home
