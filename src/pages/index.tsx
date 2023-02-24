import ReactFullpage from '@fullpage/react-fullpage'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import Loading from '@/components/Loading'
import { Start } from '@/components/page'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setLoading((t) => (t < 100 ? t + 1 : t))
    }, 25)
    return () => clearInterval(id)
  }, [])

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
                <Start />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    </>
  )
}

export default Home
