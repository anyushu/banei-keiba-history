import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

const BaneiRoots = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_1.png')] bg-cover bg-no-repeat">
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
            <div className="relative max-w-[600px]">
              <Zoom>
                <Image
                  src="/images/roots_photo_1.png"
                  width={600}
                  height={200}
                  alt="ペルシュロン種"
                />
              </Zoom>
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-3">
                <p className="text-right text-white">ペルシュロン種</p>
              </div>
            </div>
            <div className="relative ml-[100px] mt-4 max-w-[600px]">
              <Zoom>
                <Image
                  src="/images/roots_photo_2.png"
                  width={600}
                  height={200}
                  alt="ブルドン種"
                />
              </Zoom>
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-3">
                <p className="text-right text-white">ブルドン種</p>
              </div>
            </div>
            <div className="relative ml-[200px] mt-4 max-w-[600px]">
              <Zoom>
                <Image
                  src="/images/roots_photo_3.png"
                  width={600}
                  height={200}
                  alt="ベルジャン種"
                />
              </Zoom>
              {/* eslint-disable-next-line tailwindcss/migration-from-tailwind-2 */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-3">
                <p className="text-right text-white">ベルジャン種</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaneiRoots
