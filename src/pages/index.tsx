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
            scrollOverflow={true}
            credits={{ enabled: false }}
            licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_JS_LICENCE_KEY}
            scrollingSpeed={1000}
            debug={false}
            loopTop={true}
            loopBottom={true}
            onLeave={(_origin, destination) => {
              setActiveSection(destination.index)
            }}
            fitToSectionDelay={500}
            render={({ fullpageApi }) => {
              return (
                <ReactFullpage.Wrapper>
                  {/* スタートページ */}
                  <Start fullpageApi={fullpageApi} />

                  {/* 1ページ目 */}
                  <div className="section bg-[url('/images/bg_1_sp.png')]  lg:bg-[url('/images/bg_1.png')]">
                    <div className="container mx-auto h-[100svh] w-screen overflow-x-hidden">
                      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
                        <Image
                          className="hidden lg:block"
                          src="/images/ricky_words_pc_1.svg"
                          width={305.54}
                          height={115.17}
                          alt="レーススタート！"
                        />
                        <Image
                          className="block lg:hidden"
                          src="/images/ricky_words_sp_1.svg"
                          width={145}
                          height={60}
                          alt="レーススタート！"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2ページ目 */}
                  <OnlyOneKeiba activeSection={activeSection} />

                  {/* 3ページ目 */}
                  <div className="section bg-[url('/images/bg_2_sp.png')] lg:bg-[url('/images/bg_2.png')]">
                    <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
                      <Image
                        className="hidden lg:block"
                        src="/images/ricky_words_pc_3.svg"
                        width={305.54}
                        height={115.17}
                        alt="最初の関門第一障害！"
                      />
                      <Image
                        className="block lg:hidden"
                        src="/images/ricky_words_sp_3.svg"
                        width={145}
                        height={60}
                        alt="最初の関門第一障害！"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[50svh] right-[10vw] z-10 hidden transition-all duration-500 lg:block`}
                    >
                      <Image
                        src="/images/banba_front_anime_sweat_1.png"
                        width={154}
                        height={107}
                        alt="汗"
                      />
                    </div>
                    <div className="container mx-auto h-[100svh] w-screen overflow-x-hidden"></div>
                  </div>

                  {/* 4ページ目 */}
                  <BaneiHistory activeSection={activeSection} />

                  {/* 5ページ目 */}
                  <BaneiRoots activeSection={activeSection} />

                  {/* 6ページ目 */}
                  <div className="section bg-[url('/images/bg_3_sp.png')] lg:bg-[url('/images/bg_3.png')]">
                    <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
                      <Image
                        className="hidden lg:block"
                        src="/images/ricky_words_pc_6.svg"
                        width={305.54}
                        height={137}
                        alt="第二障害！力を貯めろ！"
                      />
                      <Image
                        className="block lg:hidden"
                        src="/images/ricky_words_sp_6.svg"
                        width={145}
                        height={60}
                        alt="第二障害！力を貯めろ！"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed bottom-[50svh] right-[10vw] z-10 hidden transition-all duration-500 lg:block`}
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
                      } fixed bottom-[calc(50svh+50px)] right-[calc(10vw-75px)] z-10 hidden transition-all duration-500 lg:block`}
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
                      } fixed bottom-[5svh] right-[calc(30vw-50px)] z-10 hidden transition-all duration-500 lg:block`}
                    >
                      <Image
                        src="/images/banba_front_anime_bless.png"
                        width={144}
                        height={152}
                        alt="息"
                      />
                    </div>
                    <div className="container mx-auto h-[100svh] w-screen overflow-x-hidden"></div>
                  </div>

                  {/* 7ページ目 */}
                  <BaneiTradition activeSection={activeSection} />

                  {/* 8ページ目 */}
                  <BaneiFamousHorses activeSection={activeSection} />

                  {/* 9ページ目 */}
                  <TouristAttraction activeSection={activeSection} />

                  {/* 10ページ目 */}
                  <BaneiMovie activeSection={activeSection} />

                  {/* 11ページ目 */}
                  <div className="section bg-[url('/images/bg_4_sp.png')] lg:bg-[url('/images/bg_4.png')]">
                    <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
                      <Image
                        className="hidden lg:block"
                        src="/images/ricky_words_pc_11.svg"
                        width={305.54}
                        height={137}
                        alt="後一踏ん張り"
                      />
                      <Image
                        className="block lg:hidden"
                        src="/images/ricky_words_sp_11.svg"
                        width={145}
                        height={60}
                        alt="後一踏ん張り"
                      />
                    </div>
                    <div
                      className={`${
                        activeSection > 0 ? 'opacity-100' : 'opacity-0'
                      } fixed right-[30px] bottom-[calc(30svh+20px)] z-10 w-[60px] transition-all duration-500 lg:bottom-[50svh] lg:right-[10vw] lg:w-auto`}
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
                      } fixed right-0 bottom-[calc(30svh+30px)] z-10 w-[60px] transition-all duration-500 lg:bottom-[calc(50svh+50px)] lg:right-[calc(10vw-75px)] lg:w-auto`}
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
                      } fixed bottom-[10svh] right-[calc(25vw)] z-10 w-[60px] transition-all duration-500 lg:right-[calc(30vw-50px)] lg:bottom-[5svh] lg:w-auto`}
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
