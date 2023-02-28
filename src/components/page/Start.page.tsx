import { fullpageApi } from '@fullpage/react-fullpage'
import Image from 'next/image'
import { useState } from 'react'

const Start = ({ fullpageApi }: { fullpageApi: fullpageApi }) => {
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
    <div id="startPage" className="section bg-white">
      <div className="container z-10 mx-auto h-[100svh] w-screen px-4 lg:px-0">
        <div className="flex max-w-full items-center justify-start py-4 lg:max-w-[33vw] lg:py-10">
          <a
            className="mr-3 block"
            href="https://banei-keiba.or.jp/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/header_logo_tokachi.svg"
              alt="ばんえい十勝"
              width={102.63}
              height={130.27}
            />
          </a>
          <div className="mr-6">
            <Image
              src="/images/header_logo_hokkaido.svg"
              alt="北海道遺産"
              width={91.37}
              height={130.27}
            />
          </div>
          <div>
            <Image
              src="/images/header_logo_banei.svg"
              alt="ばんえい競馬場"
              width={441.61}
              height={130.27}
            />
          </div>
        </div>
        <div className="my-[15svh] flex items-center justify-center lg:my-0">
          <div
            className="group h-[40svh] w-auto lg:h-[50svh]"
            onMouseOver={changeAfterRicky}
            onMouseOut={changeBeforeRicky}
          >
            <Image
              priority={true}
              className="h-full w-auto transition-all duration-1000 group-hover:rotate-y-360"
              src={`${over ? '/images/ricky_after.png' : '/images/ricky_before.png'}`}
              alt="リッキーくん"
              width={453.33}
              height={600}
            />
          </div>
        </div>
        <div className="z-10 mt-10 text-center">
          <button type="button" onClick={() => fullpageApi.moveSectionDown()}>
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
  )
}

export default Start
