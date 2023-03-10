import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'

import { FloatOneSweat, FloatTwoSweat, FloatBless } from '@/components/parts'

const TouristAttraction = ({ activeSection }: { activeSection: number }) => {
  const [percheronModalIsOpen, setPercheronIsOpen] = useState(false)
  const [bretonModalIsOpen, setBretonIsOpen] = useState(false)
  const [bergenModalIsOpen, setBergenIsOpen] = useState(false)

  const modalStyle = {
    overlay: {
      zIndex: 99999,
    },
    content: {
      border: 'solid 5px #00B17D',
      borderRadius: 0,
    },
  }

  return (
    <div className="section bg-[url('/images/bg_3_sp.png')] lg:bg-[url('/images/bg_3.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_9.svg"
          width={305.54}
          height={137}
          alt="気軽に遊びに来てね！"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_9.svg"
          width={145}
          height={60}
          alt="気軽に遊びに来てね！"
        />
      </div>
      <FloatOneSweat activeSection={activeSection} />
      <FloatTwoSweat activeSection={activeSection} />
      <FloatBless activeSection={activeSection} />

      <div
        className={`container mx-auto py-1 px-3 lg:py-4 lg:px-0 ${
          activeSection == 8 ? 'next-section' : ''
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
            <span className="block text-lg font-bold lg:text-4xl">観光地としての帯広競馬場</span>
            <span className="block text-xs lg:text-lg">
              Obihiro Racecourse as a tourist destination
            </span>
          </span>
        </h2>
        <div className="py-2 lg:max-w-[850px] lg:py-4">
          <div className="flex items-start justify-start">
            <div
              className="click-box relative cursor-pointer"
              onClick={() => setPercheronIsOpen(true)}
            >
              <Image
                src="/images/tourist_attraction_1.png"
                width={270}
                height={480}
                alt="とかちむら"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 lg:p-3">
                <p className="text-center text-xs text-white lg:text-base">とかちむら</p>
              </div>
            </div>
            <div
              className="click-box relative mx-2 cursor-pointer lg:mx-4 lg:mt-[100px]"
              onClick={() => setBretonIsOpen(true)}
            >
              <Image
                src="/images/tourist_attraction_2.png"
                width={270}
                height={480}
                alt="ふれあい動物園"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 lg:p-3">
                <p className="text-center text-xs text-white lg:text-base">ふれあい動物園</p>
              </div>
            </div>
            <div
              className="click-box relative cursor-pointer lg:mt-[200px]"
              onClick={() => setBergenIsOpen(true)}
            >
              <Image
                src="/images/tourist_attraction_3.png"
                width={270}
                height={480}
                alt="馬の資料館"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 lg:p-3">
                <p className="text-center text-xs text-white lg:text-base">馬の資料館</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border border-gray-500 bg-white p-2 text-xs lg:p-4 lg:text-base">
            <p className="text-xs lg:text-base">
              馬文化が息づく帯広競馬場には、レース以外でも楽しめるスポットがたくさんあります。
            </p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={percheronModalIsOpen}
        onRequestClose={() => setPercheronIsOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setPercheronIsOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/tourist_attraction_1_zoom.png"
            className="mt-auto lg:mt-0"
            width={788}
            height={527}
            alt="とかちむら"
          />
          <div className="mt-5 mb-auto lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-3xl">とかちむら</h3>
            <p className="text-xs lg:text-base">
              土・日・月曜日のレース開催日以外もオープンしている観光交流拠点。
              <br />
              十勝の農家直送の新鮮野菜やお土産が並ぶ「産直市場」、豚丼やスイーツ、こだわりのコーヒーが味わえる「キッチン」、カフェとアウトドアを発信する「スイーツ&セレクト」。
              <br />
              3つに分かれていて、どのコーナーも十勝の食と産物が充実しています。
              <br />
              家族連れや旅行で訪れる人にもたのしく、地元住民にも利用されることの多い場所です。
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={bretonModalIsOpen}
        onRequestClose={() => setBretonIsOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setBretonIsOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/tourist_attraction_2_zoom.png"
            className="mt-auto lg:mt-0"
            width={788}
            height={527}
            alt="ふれあい動物園"
          />
          <div className="mt-5 mb-auto lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-3xl">ふれあい動物園</h3>
            <p className="mb-3 text-xs lg:text-base">
              引退したばん馬の他、ポニーなど様々な馬の種類がいます。ヤギやウサギなどの小動物もおり、小さなお子様から気軽に動物にふれあえます。1カップ100円のにんじんやりは大人気です。
            </p>
            <p className="text-sm lg:text-base">
              入園料：無料
              <br />
              営業時間：帯広競馬場開門時間～17時まで ※火曜休業
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={bergenModalIsOpen}
        onRequestClose={() => setBergenIsOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setBergenIsOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/tourist_attraction_3_zoom.png"
            className="mt-auto lg:mt-0"
            width={788}
            height={527}
            alt="馬の資料館"
          />
          <div className="mt-5 mb-auto lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-3xl">馬の資料館</h3>
            <p className="mb-3 text-xs lg:text-base">
              十勝の開拓と馬は切り離せません。畑を耕し荷物を運び大活躍していました。
              <br />
              昔は人と馬は家族でした。資料館ではそんな馬と人とのかかわりについて学ぶことができます。
            </p>
            <p className="mb-3 text-xs lg:text-base">
              資料館には、ばんえいを形成した農機具のレプリカや馬耕の再現風景が設置されており、2階ではばんえいに関する映像を視聴することもできます。
            </p>
            <p className="mb-3 text-xs lg:text-base">
              十勝の馬文化の発信地として、多くの観光客が立ち寄る本館。
              <br />
              ぜひ一度足を運んでみてください。
            </p>
            <p className="text-xs lg:text-base">
              入館料：無料
              <br />
              撮影：全館撮影可能
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TouristAttraction
