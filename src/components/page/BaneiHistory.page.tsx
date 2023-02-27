/* eslint-disable tailwindcss/no-custom-classname */
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import SwiperCalss, { Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const BaneiHistory = ({ activeSection }: { activeSection: number }) => {
  const [swiper, setSwiperInstance] = useState<SwiperCalss>()
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

  const stepsLength = 5
  const slidesProgress = useMotionValue(0.1)
  const pathPos = useTransform(slidesProgress, [0, stepsLength], [0, 1])
  const pathLength = useSpring(pathPos, { stiffness: 400, damping: 80 })

  const autoplayTime = 4000
  const circlePath = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'

  return (
    <div className="section bg-[url('/images/bg_2_sp.png')] md:bg-[url('/images/bg_2.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 md:left-auto md:bottom-auto md:top-16 md:right-36">
        <Image
          className="hidden md:block"
          src="/images/ricky_words_pc_4.svg"
          width={305.54}
          height={152}
          alt="伝統と歴史ある馬文化なのです！"
        />
        <Image
          className="block md:hidden"
          src="/images/ricky_words_sp_4.svg"
          width={145}
          height={60}
          alt="伝統と歴史ある馬文化なのです！"
        />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50svh] right-[10vw] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div className="container mx-auto h-[100svh] w-screen py-4 px-3 md:px-0">
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 md:h-auto md:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold md:text-4xl">ばんえいの歩み</span>
            <span className="block text-xs md:text-lg">History of Banei</span>
          </span>
        </h2>

        <div className="relative max-w-[270px] py-4 md:max-w-[850px]">
          <Swiper
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            modules={[Autoplay, EffectFade, Pagination]}
            effect={'fade'}
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: autoplayTime,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            onSlideChange={(swiper) => {
              const { realIndex } = swiper
              slidesProgress.set(realIndex)
              setActiveSlideIndex(realIndex)
            }}
          >
            <div className="absolute left-1/2 top-0 z-10 w-[275px] translate-x-[-50%] md:w-[610px]">
              <div className="circle circle-1" id="circle">
                <svg id="progressCircle" viewBox="0 0 36 36" className="rotate-[-144deg]">
                  <path
                    className="pathBG"
                    d={circlePath}
                    fill="none"
                    stroke="rgba(255, 255, 255, 1)"
                    strokeWidth="0.3"
                  />
                  <motion.path
                    className="path"
                    d={circlePath}
                    fill="none"
                    stroke="#00B17D"
                    strokeWidth="0.4"
                    style={{
                      pathLength,
                    }}
                  />
                  <g className="[&_circle]:cursor-pointer">
                    <circle
                      r="0.7"
                      fill={`#${activeSlideIndex >= 0 ? '00B17D' : 'ffffff'}`}
                      style={{
                        transform: 'translate(18px, 2.0845px)',
                      }}
                      onClick={() => {
                        swiper?.slideTo(0)
                      }}
                    ></circle>
                    <circle
                      r="0.7"
                      fill={`#${activeSlideIndex >= 1 ? '00B17D' : 'ffffff'}`}
                      style={{
                        transform: 'translate(33.1366px, 13.0819px)',
                      }}
                      onClick={() => {
                        swiper?.slideTo(1)
                      }}
                    ></circle>
                    <circle
                      r="0.7"
                      fill={`#${activeSlideIndex >= 2 ? '00B17D' : 'ffffff'}`}
                      style={{
                        transform: 'translate(27.3548px, 30.876px)',
                      }}
                      onClick={() => {
                        swiper?.slideTo(2)
                      }}
                    ></circle>
                    <circle
                      r="0.7"
                      fill={`#${activeSlideIndex >= 3 ? '00B17D' : 'ffffff'}`}
                      style={{
                        transform: 'translate(8.6449px, 30.8758px)',
                      }}
                      onClick={() => {
                        swiper?.slideTo(3)
                      }}
                    ></circle>
                    <circle
                      r="0.7"
                      fill={`#${activeSlideIndex >= 4 ? '00B17D' : 'ffffff'}`}
                      style={{
                        transform: 'translate(2.86356px, 13.0815px)',
                      }}
                      onClick={() => {
                        swiper?.slideTo(4)
                      }}
                    ></circle>
                  </g>
                </svg>
              </div>
            </div>
            <SwiperSlide>
              <Image
                className="mx-auto"
                src="/images/history_slide_1.png"
                width={600}
                height={600}
                alt="北海道を開拓したばん馬"
              />
              <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
                <h3 className="mb-2 text-center text-base font-bold md:mb-4 md:text-2xl">
                  北海道を開拓したばん馬
                </h3>
                <p className="text-xs md:text-base">
                  北海道・十勝に初めて馬が足を踏み入れたのは、江戸幕府の時代からでした。
                  <br />
                  北海道和種馬「ドサンコ」種が生まれ、続いて大きい外国産馬が輸入されたことで「ばん馬」のルーツである馬達が北海道の農耕を耕しました。
                </p>
                <p className="mt-3 text-right text-xs md:text-base">写真/馬の資料館</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="mx-auto"
                src="/images/history_slide_2.png"
                width={600}
                height={600}
                alt="ルーツである「お祭りばん馬」"
              />
              <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
                <h3 className="mb-2 text-center text-base font-bold md:mb-4 md:text-2xl">
                  ルーツである「お祭りばん馬」
                </h3>
                <p className="text-xs md:text-base">
                  農村ではばん馬の力を競わせる娯楽として「お祭りばん馬」が誕生しました。これがばんえい競馬のルーツです。
                  <br />
                  「そりに乗って馬を操る」というスタイルは、当時の外国人指導者による「馬を一人で操れる技術」が元と言われています。
                </p>
                <p className="mt-3 text-right text-xs md:text-base">写真/長澤和恵</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="mx-auto"
                src="/images/history_slide_3.png"
                width={600}
                height={600}
                alt="戦後の復興も馬達とともに"
              />
              <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
                <h3 className="mb-2 text-center text-base font-bold md:mb-4 md:text-2xl">
                  戦後の復興も馬達とともに
                </h3>
                <p className="text-xs md:text-base">
                  戦時中には軍馬として運用されたばん馬は、戦後では移動や輸送に欠かせない人々の生活の支えとなりました。
                  <br />
                  1960年代には「自動車」の台頭によって馬の数が減少していきましたが、その中で残った馬文化が「ばんえい競馬」でした。
                </p>
                <p className="mt-3 text-right text-xs md:text-base">写真/中西関松</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="mx-auto"
                src="/images/history_slide_4.png"
                width={600}
                height={600}
                alt="4市開催"
              />
              <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
                <h3 className="mb-2 text-center text-base font-bold md:mb-4 md:text-2xl">
                  4市開催
                </h3>
                <p className="text-xs md:text-base">
                  1953年から帯広・旭川・北見・岩見沢の4市によるばんえい競馬が始まり、レースコースの変更、道具や技術の統一と現代のばんえい競馬へ近づいていきました。
                  <br />
                  さらに「競馬ブーム」によって、認知が全国へと拡大していきました。
                </p>
                <p className="mt-3 text-right text-xs md:text-base">写真/中西関松</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="mx-auto"
                src="/images/history_slide_5.png"
                width={600}
                height={600}
                alt="現在のばんえい競馬"
              />
              <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
                <h3 className="mb-2 text-center text-base font-bold md:mb-4 md:text-2xl">
                  現在のばんえい競馬
                </h3>
                <p className="text-xs md:text-base">
                  2007年にばんえい競馬は民間と連携し「ばんえい十勝」として生まれ変わり、現在では観光の名所としても人々の注目を集めています。
                  <br />
                  感染症の中でも衰えず、「ばんえい十勝」は全国で愛される文化として日々発展しています。
                </p>
                <p className="mt-3 text-right text-xs md:text-base">　</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default BaneiHistory
