import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

const OnlyOneKeiba = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_1_sp.png')] md:bg-[url('/images/bg_1.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 md:left-auto md:bottom-auto md:top-16 md:right-36">
        <Image
          className="hidden md:block"
          src="/images/ricky_words_pc_2.svg"
          width={305.54}
          height={115.17}
          alt="世界でも例のないユニークな競馬！"
        />
        <Image
          className="block md:hidden"
          src="/images/ricky_words_sp_2.svg"
          width={145}
          height={60}
          alt="世界でも例のないユニークな競馬！"
        />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50svh] right-[10vw] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div className="container mx-auto h-[100svh] w-screen py-1 px-3 md:py-4 md:px-0">
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 md:h-auto md:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold md:text-4xl">
              世界で唯一の「ばんえい競馬」
            </span>
            <span className="block text-xs md:text-lg">
              The only “Banei Horse Racing” in the world
            </span>
          </span>
        </h2>
        <div className="max-w-[290px] py-2 sm:max-w-[850px] md:py-4">
          <div className="grid grid-cols-2 gap-2 md:gap-4">
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
          <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
            <p className="text-xs md:text-base">
              北海道帯広市で開催されている「ばんえい競馬」。一般的な競馬とは異なり、体重1トンもある大型馬が「そり」を曳いて「力」と「速さ」を競う競技です。直線200ｍ、大小2つの坂の障害が設けられたコースで行われる迫力満点のレース。そのルーツをご紹介いたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlyOneKeiba
