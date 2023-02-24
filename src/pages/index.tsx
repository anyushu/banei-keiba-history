import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Loading from '@/components/loading'

const Home: NextPage = () => {
  // ローディングアニメーション
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setLoading((t) => (t < 100 ? t + 1 : t))
    }, 25)
    return () => clearInterval(id)
  }, [])

  // リッキーくんアニメーション
  const [over, setOver] = useState(false)
  const changeBeforeRicky = () => {
    setTimeout(() => {
      setOver(false)
    }, 500)
  }
  const changeAfterRicky = () => {
    setTimeout(() => {
      setOver(true)
    }, 500)
  }

  return (
    <>
      <Loading loading={loading} />

      <div className={`opacity-0 ${loading == 100 && 'animate-fade-in'}`}>
        <ReactFullpage
          credits={{ enabled: false }}
          licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_JS_LICENCE_KEY}
          scrollingSpeed={1000}
          debug={true}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section bg-white">
                  <div className="container mx-auto h-screen w-screen px-4 md:px-0">
                    <div className="py-4 md:max-w-[33vw] md:py-10">
                      <Image src="/images/logo.png" alt="サイト名" width={554.79} height={130.27} />
                    </div>
                    <div className="my-[15vh] flex items-center justify-center md:my-0">
                      <div
                        className="h-[40vh] w-auto shrink transition-all duration-1000 hover:rotate-y-360 md:h-[50vh]"
                        onMouseOver={changeAfterRicky}
                        onMouseOut={changeBeforeRicky}
                      >
                        <Image
                          className="h-full w-auto"
                          src={`${over ? '/images/ricky_after.png' : '/images/ricky_before.png'}`}
                          alt="リッキーくん"
                          width={453.33}
                          height={600}
                        />
                      </div>
                    </div>
                    <div className="mt-10 text-center">
                      <button type="button" className="">
                        <Image
                          className="drop-shadow-xl"
                          src="/images/btn_start.png"
                          alt="スタート"
                          width={354}
                          height={58}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    </>
  )
}

export default Home
