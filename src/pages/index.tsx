import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import {
  Start,
  Loading,
  OnlyOneKeiba,
  BaneiHistory,
  BaneiRoots,
  BaneiTradition,
  BaneiFamousHorses,
  TouristAttraction,
  BaneiMovie,
  Goals,
} from '@/components/page'
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
            loopBottom={true}
            onLeave={(_origin, destination) => {
              setActiveSection(destination.index)
            }}
            render={({ fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  {/* スタートページ */}
                  <Start fullpageApi={fullpageApi} />

                  {/* 1ページ目 */}
                  <div className="section bg-[url('/images/bg_1_sp.png')]  md:bg-[url('/images/bg_1.png')]">
                    <div className="container mx-auto h-screen w-screen"></div>
                  </div>

                  {/* 2ページ目 */}
                  <OnlyOneKeiba activeSection={activeSection} />

                  {/* 3ページ目 */}
                  <div className="section bg-[url('/images/bg_2_sp.png')] md:bg-[url('/images/bg_2.png')]">
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[50vh] right-[10vw] z-10 hidden transition-all duration-500 md:block`}
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

                  {/* 5ページ目 */}
                  <div className="section bg-[url('/images/bg_3_sp.png')] md:bg-[url('/images/bg_3.png')]">
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[50vh] right-[10vw] z-10 hidden transition-all duration-500 md:block`}
                    >
                      <Image
                        src="/images/banba_front_anime_sweat_1.png"
                        width={154}
                        height={107}
                        alt="汗"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[calc(50vh+50px)] right-[calc(10vw-75px)] z-10 hidden transition-all duration-500 md:block`}
                    >
                      <Image
                        src="/images/banba_front_anime_sweat_1.png"
                        width={154}
                        height={107}
                        alt="汗"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[5vh] right-[calc(30vw-50px)] z-10 hidden transition-all duration-500 md:block`}
                    >
                      <Image
                        src="/images/banba_front_anime_bless.png"
                        width={144}
                        height={152}
                        alt="息"
                      />
                    </div>
                    <div className="container mx-auto h-screen w-screen"></div>
                  </div>

                  {/* 6ページ目 */}
                  <BaneiTradition activeSection={activeSection} />

                  {/* 7ページ目 */}
                  <BaneiFamousHorses activeSection={activeSection} />

                  {/* 8ページ目 */}
                  <TouristAttraction activeSection={activeSection} />

                  {/* 9ページ目 */}
                  <BaneiMovie activeSection={activeSection} />

                  {/* 10ページ目 */}
                  <div className="section bg-[url('/images/bg_4_sp.png')] md:bg-[url('/images/bg_4.png')]">
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed right-[30px] bottom-[calc(30vh+20px)] z-10 w-[60px] transition-all duration-500 md:bottom-[50vh] md:right-[10vw] md:w-auto`}
                    >
                      <Image
                        src="/images/banba_front_anime_sweat_1.png"
                        width={154}
                        height={107}
                        alt="汗"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed right-0 bottom-[calc(30vh+30px)] z-10 w-[60px] transition-all duration-500 md:bottom-[calc(50vh+50px)] md:right-[calc(10vw-75px)] md:w-auto`}
                    >
                      <Image
                        src="/images/banba_front_anime_sweat_1.png"
                        width={154}
                        height={107}
                        alt="汗"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[10vh] right-[calc(25vw)] z-10 w-[60px] transition-all duration-500 md:right-[calc(30vw-50px)] md:bottom-[5vh] md:w-auto`}
                    >
                      <Image
                        src="/images/banba_front_anime_bless.png"
                        width={144}
                        height={152}
                        alt="息"
                      />
                    </div>
                  </div>

                  {/* 最後 */}
                  <Goals />
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
