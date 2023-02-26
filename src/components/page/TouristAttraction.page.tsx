import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'

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
    <div className="section bg-[url('/images/bg_3_sp.png')] md:bg-[url('/images/bg_3.png')]">
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50vh] right-[10vw] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[calc(50vh+50px)] right-[calc(10vw-75px)] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[5vh] right-[calc(30vw-50px)] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_bless.png" width={144} height={152} alt="息" />
      </div>

      <div className="container mx-auto h-screen w-screen py-4 px-3 md:px-0">
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 md:h-auto md:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold md:text-4xl">観光地としての帯広競馬場</span>
            <span className="block text-xs md:text-lg">
              Obihiro Racecourse as a tourist destination
            </span>
          </span>
        </h2>
        <div className="max-w-[850px] py-4">
          <div className="mt-8 flex items-start justify-start md:mt-0">
            <div className="relative cursor-pointer" onClick={() => setPercheronIsOpen(true)}>
              <Image
                src="/images/tourist_attraction_1.png"
                width={270}
                height={480}
                alt="とかちむら"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 md:p-3">
                <p className="text-center text-xs text-white md:text-base">とかちむら</p>
              </div>
            </div>
            <div
              className="relative mx-2 mt-[50px] cursor-pointer md:mx-4 md:mt-[100px]"
              onClick={() => setBretonIsOpen(true)}
            >
              <Image
                src="/images/tourist_attraction_2.png"
                width={270}
                height={480}
                alt="ふれあい動物園"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 md:p-3">
                <p className="text-center text-xs text-white md:text-base">ふれあい動物園</p>
              </div>
            </div>
            <div
              className="relative mt-[100px] cursor-pointer md:mt-[200px]"
              onClick={() => setBergenIsOpen(true)}
            >
              <Image
                src="/images/tourist_attraction_3.png"
                width={270}
                height={480}
                alt="馬の資料館"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 md:p-3">
                <p className="text-center text-xs text-white md:text-base">馬の資料館</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border border-gray-500 bg-white p-4 text-xs md:text-base">
            <p>馬文化が息づく帯広競馬場には、レース以外でも楽しめるスポットがたくさんあります。</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={percheronModalIsOpen}
        onRequestClose={() => setPercheronIsOpen(false)}
        style={modalStyle}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setPercheronIsOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image
            src="/images/tourist_attraction_1_zoom.png"
            width={788}
            height={527}
            alt="とかちむら"
          />
          <div className="ml-12">
            <h3 className="mb-3 text-3xl">とかちむら</h3>
            <p>
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
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setBretonIsOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image
            src="/images/tourist_attraction_2_zoom.png"
            width={788}
            height={527}
            alt="ふれあい動物園"
          />
          <div className="ml-12">
            <h3 className="mb-3 text-3xl">ふれあい動物園</h3>
            <p className="mb-3">
              引退したばん馬の他、ポニーなど様々な馬の種類がいます。ヤギやウサギなどの小動物もおり、小さなお子様から気軽に動物にふれあえます。1カップ100円のにんじんやりは大人気です。
            </p>
            <p>
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
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setBergenIsOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image
            src="/images/tourist_attraction_3_zoom.png"
            width={788}
            height={527}
            alt="馬の資料館"
          />
          <div className="ml-12">
            <h3 className="mb-3 text-3xl">馬の資料館</h3>
            <p className="mb-3">
              十勝の開拓と馬は切り離せません。畑を耕し荷物を運び大活躍していました。
              <br />
              昔は人と馬は家族でした。資料館ではそんな馬と人とのかかわりについて学ぶことができます。
            </p>
            <p className="mb-3">
              資料館には、ばんえいを形成した農機具のレプリカや馬耕の再現風景が設置されており、2階ではばんえいに関する映像を視聴することもできます。
            </p>
            <p className="mb-3">
              十勝の馬文化の発信地として、多くの観光客が立ち寄る本館。
              <br />
              ぜひ一度足を運んでみてください。
            </p>
            <p>
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
