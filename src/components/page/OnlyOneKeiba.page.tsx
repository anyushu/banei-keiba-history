import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

import { FloatOneSweat } from '@/components/parts'

const OnlyOneKeiba = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_1_sp.png')] lg:bg-[url('/images/bg_1.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_2.svg"
          width={305.54}
          height={115.17}
          alt="世界でも例のないユニークな競馬！"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_2.svg"
          width={145}
          height={60}
          alt="世界でも例のないユニークな競馬！"
        />
      </div>
      <FloatOneSweat activeSection={activeSection} />
      <div
        className={`container mx-auto py-1 px-3 lg:py-4 lg:px-0 ${
          activeSection == 1 ? 'next-section' : ''
        }`}
      >
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 lg:h-auto lg:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold lg:text-4xl">
              世界で唯一の「ばんえい競馬」
            </span>
            <span className="block text-xs lg:text-lg">
              The only “Banei Horse Racing” in the world
            </span>
          </span>
        </h2>
        <div className="max-w-[290px] py-2 lg:max-w-[850px] lg:py-4">
          <div className="grid grid-cols-2 gap-2 lg:gap-4">
            <div className="col-span-2">
              <Zoom>
                <Image src="/images/stage01-ph01.png" width={850} height={340} alt="写真" />
              </Zoom>
            </div>
            <Zoom>
              <Image
                className="col-span-1"
                src="/images/stage01-ph02.png"
                width={420}
                height={340}
                alt="写真"
              />
            </Zoom>
            <Zoom>
              <Image
                className="col-span-1"
                src="/images/stage01-ph03.png"
                width={420}
                height={340}
                alt="写真"
              />
            </Zoom>
          </div>
          <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
            <p className="text-xs lg:text-base">
              北海道帯広市で開催されている「ばんえい競馬」。一般的な競馬とは異なり、体重1トンもある大型馬が「そり」を曳いて「力」と「速さ」を競う競技です。直線200ｍ、大小2つの坂の障害が設けられたコースで行われる迫力満点のレース。そのルーツをご紹介いたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlyOneKeiba
