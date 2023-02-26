import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'

const BaneiRoots = ({ activeSection }: { activeSection: number }) => {
  const [percheronModalIsOpen, setPercheronIsOpen] = useState(false)
  const [bretonModalIsOpen, setBretonIsOpen] = useState(false)
  const [bergenModalIsOpen, setBergenIsOpen] = useState(false)

  return (
    <div className="section bg-[url('/images/bg_2_sp.png')] md:bg-[url('/images/bg_2.png')]">
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50vh] right-[10vw] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[calc(50vh+50px)] right-[calc(10vw-75px)] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div className="container mx-auto h-screen w-screen py-4">
        <h2 className="flex items-center">
          <Image src="/images/icon_hidume.png" width={140} height={140} alt="蹄" />
          <span>
            <span className="block text-4xl font-bold">ばん馬のルーツ</span>
            <span className="block text-lg">Roots of Banei</span>
          </span>
        </h2>
        <div className="max-w-[850px] py-4">
          <div className="border border-gray-500 bg-white p-4">
            <p>
              ばん馬は純粋な北海道産と思われがちですが、実はルーツとなった馬は「ペルシュロン種」「ブルトン種」「ベルジャン種」といった西洋生まれの大型馬。明治時代に農耕が進むにつれて、小柄で丈夫な「ドサンコ種」よりも大型で力のある外国産馬が求められるようになり、徐々にばん馬のルーツとして浸透していきました。
            </p>
          </div>
          <h3 className="my-6 text-4xl font-bold">ルーツとなった主な純血種</h3>
          <div>
            <div
              className="relative max-w-[600px] cursor-pointer"
              onClick={() => setPercheronIsOpen(true)}
            >
              <Image
                src="/images/roots_photo_1.png"
                width={600}
                height={200}
                alt="ペルシュロン種"
              />
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-3">
                <p className="text-right text-white">ペルシュロン種</p>
              </div>
            </div>
            <div
              className="relative ml-[100px] mt-4 max-w-[600px] cursor-pointer"
              onClick={() => setBretonIsOpen(true)}
            >
              <Image
                src="/images/roots_photo_2.png"
                width={600}
                height={200}
                alt="ブルドン種"
              />
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-3">
                <p className="text-right text-white">ブルドン種</p>
              </div>
            </div>
            <div
              className="relative ml-[200px] mt-4 max-w-[600px] cursor-pointer"
              onClick={() => setBergenIsOpen(true)}
            >
              <Image
                src="/images/roots_photo_3.png"
                width={600}
                height={200}
                alt="ベルジャン種"
              />
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-3">
                <p className="text-right text-white">ベルジャン種</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={percheronModalIsOpen}
        onRequestClose={() => setPercheronIsOpen(false)}
        style={{
          overlay: {
            zIndex: 99999,
          },
          content: {
            border: 'solid 5px #00B17D',
            borderRadius: 0,
          },
        }}
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
            src="/images/roots_photo_1_zoom.jpg"
            width={720}
            height={512}
            alt="ペルシュロン種"
          />
          <div className="ml-12">
            <h3 className="mb-3 text-3xl">ペルシュロン種</h3>
            <p>
              フランス北西部のぺるしゅ地方原産。
              <br />
              8世紀頃からフランスの重種馬にアラブ種などの血が入ったものとされ、品のある容姿が特徴です。力が強く、性格はおとなしく従順。毛色は芦毛や青毛が多く見られます。ばん馬の祖とされるイレネーや1億円達成馬キンタロー、フクイチもペルシュロン系です。
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={bretonModalIsOpen}
        onRequestClose={() => setBretonIsOpen(false)}
        style={{
          overlay: {
            zIndex: 99999,
          },
          content: {
            border: 'solid 5px #00B17D',
            borderRadius: 0,
          },
        }}
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
            src="/images/roots_photo_2_zoom.jpg"
            width={720}
            height={512}
            alt="ペルシュロン種"
          />
          <div className="ml-12">
            <h3 className="mb-3 text-3xl">ブルトン種</h3>
            <p>
              フランス西部のブルターニュ半島原産。
              <br />
              肉付きがよく頑丈でスタミナがあり、日本には戦後、アングロノルマンに替わって輸入されるようになりました。毛色は栗毛、鹿毛などで、青毛は存在しません。足先に映える距毛（きょもう）が長く多いのが特徴。1億円達成場では、タカラフジがブルトン系です。
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={bergenModalIsOpen}
        onRequestClose={() => setBergenIsOpen(false)}
        style={{
          overlay: {
            zIndex: 99999,
          },
          content: {
            border: 'solid 5px #00B17D',
            borderRadius: 0,
          },
        }}
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
            src="/images/roots_photo_3_zoom.jpg"
            width={720}
            height={512}
            alt="ペルシュロン種"
          />
          <div className="ml-12">
            <h3 className="mb-3 text-3xl">ベルジャン種</h3>
            <p>
              ベルギーのブラバント地方原産。
              <br />
              アメリカで人気があり、日本にもたらされたのもアメリカで農耕馬として品種改良されたベルジャン種です。首が太く、がっしりとした体格ながらスピードがあるのが特徴。栗毛が多く見られます。1億円達成場では、マルゼンバージがベルジャン系です。
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default BaneiRoots
