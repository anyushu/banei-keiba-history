import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'

const BaneiRoots = ({ activeSection }: { activeSection: number }) => {
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
    <div className="section bg-[url('/images/bg_2_sp.png')] lg:bg-[url('/images/bg_2.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_5.svg"
          width={305.54}
          height={139}
          alt="元々は農耕馬で外国馬！"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_5.svg"
          width={145}
          height={60}
          alt="元々は農耕馬で外国馬！"
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
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[calc(50dvh+50px)] right-[calc(10vw-75px)] z-10 hidden transition-all duration-500 lg:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`container mx-auto py-1 px-3 lg:py-4 lg:px-0 ${
          activeSection == 4 ? 'next-section' : ''
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
            <span className="block text-lg font-bold lg:text-4xl">ばん馬のルーツ</span>
            <span className="block text-xs lg:text-lg">Roots of Banei</span>
          </span>
        </h2>
        <div className="max-w-[850px] py-2 lg:py-4">
          <div className="border border-gray-500 bg-white p-2 lg:p-4">
            <p className="text-xs lg:text-base">
              ばん馬は、小柄で丈夫な「ドサンコ」と思われがちですが、ルーツは外国から輸入された大型馬。「ペルシュロン種」「ブルトン種」「ベルジャン種」の純血種をもとにした交雑種で、「日本輓系（ばんけい）種」が主流です。サラブレッドの2倍、体重1トンを超える馬が数多くいます。
            </p>
          </div>
          <h3 className="my-2 text-lg font-bold lg:my-6 lg:text-4xl">ルーツとなった主な純血種</h3>
          <div className="max-w-[290px] lg:max-w-full">
            <div
              className="relative ml-8 max-w-[250px] cursor-pointer lg:ml-0 lg:max-w-[600px]"
              onClick={() => setPercheronIsOpen(true)}
            >
              <Image
                src="/images/roots_photo_1.png"
                width={600}
                height={200}
                alt="ペルシュロン種"
              />
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-1 lg:p-3">
                <p className="text-right text-xs text-white lg:text-base">ペルシュロン種</p>
              </div>
            </div>
            <div
              className="relative mt-2 ml-4 max-w-[250px] cursor-pointer lg:ml-[100px] lg:max-w-[600px]"
              onClick={() => setBretonIsOpen(true)}
            >
              <Image src="/images/roots_photo_2.png" width={600} height={200} alt="ブルトン種" />
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-1 lg:p-3">
                <p className="text-right text-xs text-white lg:text-base">ブルトン種</p>
              </div>
            </div>
            <div
              className="relative mt-2 max-w-[250px] cursor-pointer lg:ml-[200px] lg:max-w-[600px]"
              onClick={() => setBergenIsOpen(true)}
            >
              <Image
                src="/images/roots_photo_3.png"
                width={600}
                height={200}
                alt="ベルジャン種"
              />
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-1 lg:p-3">
                <p className="text-right text-xs text-white lg:text-base">ベルジャン種</p>
              </div>
            </div>
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
            className="mt-auto lg:mt-0"
            src="/images/roots_photo_1_zoom.jpg"
            width={720}
            height={512}
            alt="ペルシュロン種"
          />
          <div className="mt-5 mb-auto lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-3xl">ペルシュロン種</h3>
            <p className="text-sm lg:text-base">
              フランス北西部のペルシュ地方原産。
              <br />
              8世紀頃からフランスの重種馬にアラブ種などの血が入ったものとされ、品のある容姿が特徴です。力が強く、性格はおとなしく従順。毛色は芦毛や青毛が多く見られます。
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
            className="mt-auto lg:mt-0"
            src="/images/roots_photo_2_zoom.jpg"
            width={720}
            height={512}
            alt="ペルシュロン種"
          />
          <div className="mt-5 mb-auto lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-3xl">ブルトン種</h3>
            <p className="text-sm lg:text-base">
              フランス西部のブルターニュ半島原産。
              <br />
              肉付きがよく頑丈でスタミナがあり、日本には戦後、アングロノルマンに替わって輸入されるようになりました。毛色は栗毛、鹿毛などで、青毛は存在しません。足先に映える距毛（きょもう）が長く多いのが特徴。
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
            className="mt-auto lg:mt-0"
            src="/images/roots_photo_3_zoom.jpg"
            width={720}
            height={512}
            alt="ペルシュロン種"
          />
          <div className="mt-5 mb-auto lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-3xl">ベルジャン種</h3>
            <p className="text-sm lg:text-base">
              ベルギーのブラバント地方原産。
              <br />
              アメリカで人気があり、日本にもたらされたのもアメリカで農耕馬として品種改良されたベルジャン種です。首が太く、がっしりとした体格ながらスピードがあるのが特徴。栗毛が多く見られます。
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default BaneiRoots
