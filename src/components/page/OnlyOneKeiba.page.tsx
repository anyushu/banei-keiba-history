import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

const OnlyOneKeiba = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_1.png')] bg-cover bg-no-repeat">
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50vh] right-[10vw] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div className="container mx-auto h-screen w-screen py-4">
        <h2 className="flex items-center">
          <Image src="/images/icon_hidume.png" width={140} height={140} alt="蹄" />
          <span>
            <span className="block text-4xl font-bold">世界で唯一の「ばんえい競馬」</span>
            <span className="block text-lg">The only “Banei Horse Racing” in the world</span>
          </span>
        </h2>
        <div className="max-w-[850px] py-4">
          <div className="grid grid-cols-2 gap-4">
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
          <div className="mt-4 border border-gray-500 bg-white p-4">
            <p>
              農耕から独自に発展した「ばんえい競馬」は、一般的な競馬と異なり、「そり」を曳いて競走する世界唯一の競馬です。
              <br />
              レースコースは一直線、2つの坂の障害があることも特徴で、馬の「力強さ」や「忍耐力」、それを制御する騎手の「テクニック」が求められます。
              <br />
              そんな唯一無二のレースを生んだ歴史と伝統、文化に触れていってください。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlyOneKeiba