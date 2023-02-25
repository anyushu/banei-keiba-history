import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Start, Loading, OnlyOneKeiba, BaneiHistory, BaneiRoots } from '@/components/page'
import { FloatBanbaAction, FloatRicky, FloatScrollIcon } from '@/components/parts'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setLoading((t) => (t < 100 ? t + 1 : t))
    }, 25)
    return () => clearInterval(id)
  }, [])

  const [activeSection, setActiveSection] = useState(0)

  return (
    <>
      <Loading loading={loading} />

      <div className=" relative">
        <FloatScrollIcon activeSection={activeSection} />
        <FloatRicky activeSection={activeSection} />
        <FloatBanbaAction activeSection={activeSection} />

        <div className={`opacity-0 ${loading == 100 && 'animate-fade-in'}`}>
          <ReactFullpage
            credits={{ enabled: false }}
            licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_JS_LICENCE_KEY}
            scrollingSpeed={1000}
            debug={false}
            onLeave={(_origin, destination) => {
              setActiveSection(destination.index)
            }}
            render={({ fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  {/* スタートページ */}
                  <Start fullpageApi={fullpageApi} />

                  {/* 1ページ目 */}
                  <div className="section bg-[url('/images/bg_1.png')] bg-cover bg-no-repeat">
                    <div className="container mx-auto h-screen w-screen"></div>
                  </div>

                  {/* 2ページ目 */}
                  <OnlyOneKeiba activeSection={activeSection} />

                  {/* 3ページ目 */}
                  <div className="section bg-[url('/images/bg_2.png')] bg-cover bg-no-repeat">
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[50vh] right-[10vw] z-10 transition-all duration-500`}
                    >
                      <Image
                        src="/images/banba_front_anime_sweat_1.png"
                        width={154}
                        height={107}
                        alt="汗"
                      />
                    </div>
                    <div className="container mx-auto h-screen w-screen"></div>
                  </div>

                  {/* 4ページ目 */}

                  <BaneiHistory activeSection={activeSection} />

                  {/* 4ページ目 */}
                  <BaneiRoots activeSection={activeSection} />
                </ReactFullpage.Wrapper>
              )
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
