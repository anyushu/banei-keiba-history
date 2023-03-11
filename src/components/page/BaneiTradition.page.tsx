import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

import { FloatOneSweat, FloatTwoSweat } from '@/components/parts'

const BaneiTradition = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_3_sp.png')] lg:bg-[url('/images/bg_3.png')]">
      <div
        className={`${
          activeSection == 7 && 'animate-ricky-fade-out'
        } fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36`}
      >
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_7.svg"
          width={305.54}
          height={137}
          alt="今も大切に受け継がれています！"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_7.svg"
          width={145}
          height={60}
          alt="今も大切に受け継がれています！"
        />
      </div>
      <FloatOneSweat activeSection={activeSection} />
      <FloatTwoSweat activeSection={activeSection} />

      <div
        className={`container mx-auto py-1 px-3 lg:py-4 lg:px-0 ${
          activeSection == 6 ? 'next-section' : ''
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
            <span className="block text-lg font-bold lg:text-4xl">ばんえい競馬の伝統</span>
            <span className="block text-xs lg:text-lg">Tradition of Banei Horse Racing</span>
          </span>
        </h2>
        <div className="max-w-[260px] py-2 lg:max-w-[850px] lg:py-4">
          <div className="flex items-start justify-center">
            <Zoom>
              <Image
                src="/images/tradition_photo_1.png"
                width={848}
                height={330}
                alt="ばんえい競馬の伝統"
              />
            </Zoom>
          </div>
          <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
            <h3 className="text-sm font-bold lg:mb-4 lg:text-xl">継承されてきた道具</h3>
            <p className="text-xs lg:text-base">
              ばんえい競馬は農耕馬・荷役馬から発展したため、馬を操る「馭具」やそりを引く「引き具」など、多数の競争用具があります。
              <br />
              関係者は今ある道具を大切に受け継ぐことでばんえい競馬を守っています。
            </p>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1 lg:mt-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-4">
            <div className="col-span-2 row-span-2">
              <Zoom
                zoomImg={{
                  src: '/images/tradition_photo_2_zoom.jgp',
                  width: '553',
                  height: '784',
                }}
              >
                <Image
                  className="h-[120px] lg:h-auto"
                  src="/images/tradition_photo_2.png"
                  width={800}
                  height={694}
                  alt="ばんえい競馬の伝統"
                />
              </Zoom>
            </div>
            <div className="relative col-span-1">
              <Zoom
                zoomImg={{
                  src: '/images/tradition_photo_3_zoom.jgp',
                }}
              >
                <Image
                  src="/images/tradition_photo_3.png"
                  width={400}
                  height={347}
                  alt="ばんえい競馬の伝統"
                />
              </Zoom>
            </div>
            <div className="relative col-span-1">
              <Zoom
                zoomImg={{
                  src: '/images/tradition_photo_4_zoom.jgp',
                }}
              >
                <Image
                  src="/images/tradition_photo_4.png"
                  width={400}
                  height={347}
                  alt="ばんえい競馬の伝統"
                />
              </Zoom>
            </div>
            <div className="col-span-3 border border-gray-500 bg-white p-2 lg:col-span-2 lg:p-4">
              <p className="text-xs lg:text-base">
                騎手は、馬に自らの意志を伝えるために手綱のみでそりの上から指示を出さなければなりません。馬と周囲の状況を見ながら的確に道具を操るという、極めて高度な技術を習得する必要があります。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaneiTradition
