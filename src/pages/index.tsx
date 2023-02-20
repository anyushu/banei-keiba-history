import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'

import Loading from '@/components/loading'

const Home: NextPage = () => {
  const [isShowLoading, setIsShowLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false)
    }, 1000)
  })
  return (
    <>
      <NextSeo title="Next.js - Typescript Boilerplate" />

      <Loading />

      {/* {isShowLoading ? (
        <Loading />
      ) : (
        <ReactFullpage
          credits={{ enabled: false }}
          licenseKey={'XLEGI-J6ZRH-P1CKK-F7JG8-KJVRK'}
          scrollingSpeed={1000}
          debug={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <p>Section 1 (welcome to fullpage.js)</p>
                  <button onClick={() => fullpageApi.moveSectionDown()}>
                    Click me to move down
                  </button>
                </div>
                <div className="section">
                  <p>Section 2</p>
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      )} */}
    </>
  )
}

export default Home
