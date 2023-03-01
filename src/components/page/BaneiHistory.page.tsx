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
  const slidesProgress = useMotionValue(0)
  const pathPos = useTransform(slidesProgress, [0, stepsLength], [0, 1])
  const pathLength = useSpring(pathPos, { stiffness: 400, damping: 80 })

  const autoplayTime = 10000
  const circlePath = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'

  if (activeSection == 4 && swiper) {
    swiper.autoplay.start()
  }

  return (
    <div className="section bg-[url('/images/bg_2_sp.png')] lg:bg-[url('/images/bg_2.png')]">
      <div className="fixed left-[60px] bottom-[20px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_4.svg"
          width={305.54}
          height={152}
          alt="伝統と歴史ある馬文化なのです！"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_4.svg"
          width={145}
          height={60}
          alt="伝統と歴史ある馬文化なのです！"
        />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50dvh] right-[10vw] z-10 hidden transition-all duration-500 lg:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`container mx-auto py-1 px-3 lg:py-4 lg:px-0 ${
          activeSection == 3 ? 'next-section' : ''
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
            <span className="block text-lg font-bold lg:text-4xl">ばんえいの歩み</span>
            <span className="block text-xs lg:text-lg">History of Banei</span>
          </span>
        </h2>

        <div className="relative max-w-[270px] py-2 lg:max-w-[850px] lg:py-4">
          <Swiper
            onSwiper={(swiper) => {
              swiper.autoplay.stop()
              setSwiperInstance(swiper)
            }}
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
            onAutoplayTimeLeft={(swiper, _timeLeft, percentage) => {
              const { realIndex } = swiper
              slidesProgress.set(realIndex - percentage + 1)
            }}
            onSlideChange={(swiper) => {
              const { realIndex } = swiper
              setActiveSlideIndex(realIndex)
            }}
          >
            <div className="absolute left-1/2 top-0 z-10 w-[275px] translate-x-[-50%] lg:w-[610px]">
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
              <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
                <h3 className="mb-2 text-center text-base font-bold lg:mb-4 lg:text-2xl">
                  北海道を開拓したばん馬
                </h3>
                <p className="text-xs lg:text-base">
                  明治時代（1880年代）。馬は開拓の動力として山から木を運び、抜根し、人々と共に北海道の原野を切り開きます。それまでの小柄な「ドサンコ」よりも海外の大型馬が輸入され、より力のある大きな馬達が使われるようになりました。この大型馬が「ばん馬」です。
                </p>
                <p className="mt-3 text-right text-xs lg:text-base">写真/馬の資料館</p>
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
              <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
                <h3 className="mb-2 text-center text-base font-bold lg:mb-4 lg:text-2xl">
                  ルーツである「お祭りばん馬」
                </h3>
                <p className="text-xs lg:text-base">
                  農民たちにとって馬は動力でもあり大切な家族の一員でした。馬の価値や力を試す競争が、神社や地域のお祭りで余興として行われます。「愛馬の力比べ」がばんえい競馬のルーツです。十勝では1908
                  年に音更町東士幌神社で祭典余興が行われた記録が残っています。
                </p>
                <p className="mt-3 text-right text-xs lg:text-base">写真/長澤和恵</p>
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
              <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
                <h3 className="mb-2 text-center text-base font-bold lg:mb-4 lg:text-2xl">
                  戦後の復興も馬達とともに
                </h3>
                <p className="text-xs lg:text-base">
                  戦時中には軍馬として戦地に送り出された歴史もあるばん馬。1946年の終戦後、移動や輸送に欠かせない生活の支えとなりました。1955年に十勝で6万5千頭と、頭数がピークに達します。しかし1960年頃からトラクターが普及し馬は減少。その中で残った馬文化が「ばんえい競馬」でした。
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="mx-auto"
                src="/images/history_slide_4.png"
                width={600}
                height={600}
                alt="4市で開催されたばんえい競馬"
              />
              <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
                <h3 className="mb-2 text-center text-base font-bold lg:mb-4 lg:text-2xl">
                  4市で開催されたばんえい競馬
                </h3>
                <p className="text-xs lg:text-base">
                  1946年に競馬法にのると紆余曲折があるものの、1953年から帯広・旭川・北見・岩見沢市よるばんえい競馬が始まりました。お祭りばん馬がルーツであるため、関係者の創意工夫により公正な仕組みが築き上げられ、1991年に発売額が322億円に達します。しかしバブル崩壊後から売上は低迷。2006年に存続の危機に立たされます。
                </p>
                <p className="mt-3 text-right text-xs lg:text-base">写真/中西関松</p>
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
              <div className="mt-2 border border-gray-500 bg-white p-2 lg:mt-4 lg:p-4">
                <h3 className="mb-2 text-center text-base font-bold lg:mb-4 lg:text-2xl">
                  現在のばんえい競馬
                </h3>
                <p className="text-xs lg:text-base">
                  2007年、全国のファンや市民有志からの後押しもあり、「ばんえい十勝」として帯広市単独開催でスタート。地元の企業や観光地、お祭りとコラボを行い、大人はもちろんお子様連れの家族などが楽しめる施設として生まれ変わりました。地域に、そしてインターネットで応援してくれるファンに愛される競馬として、100年以上続く馬文化を守り続けます。
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default BaneiHistory
