import Image from 'next/image'

import { FloatOneSweat, FloatTwoSweat, FloatBless } from '@/components/parts'

const BaneiMovie = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_4_sp.png')] lg:bg-[url('/images/bg_4.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_10.svg"
          width={362.72}
          height={191.85}
          alt="ばんえいの歴史がわかるスペシャルムービーです！"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_10.svg"
          width={180}
          height={60}
          alt="ばんえいの歴史がわかるスペシャルムービーです！"
        />
      </div>
      <FloatOneSweat activeSection={activeSection} />
      <FloatTwoSweat activeSection={activeSection} />
      <FloatBless activeSection={activeSection} />

      <div
        className={`container mx-auto py-1 px-3 lg:py-4 lg:px-0 ${
          activeSection == 9 ? 'next-section' : ''
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
              SPECIAL MOVIE
              <br className=" inline lg:hidden" />
              「ばんえい競馬の歴史」
            </span>
            <span className="block text-xs lg:text-lg">
              SPECIAL MOVIE “History of Banei Horse Racing”
            </span>
          </span>
        </h2>

        <div className="mt-12 max-w-[850px] py-4 lg:mt-0">
          <div className="relative h-0 w-full pt-[56.25%]">
            <iframe
              className=" absolute top-0 left-0 h-full w-full"
              src="https://www.youtube.com/embed/VuYS5O-LMNk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaneiMovie
