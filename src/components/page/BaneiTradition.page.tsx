import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'

const BaneiTradition = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_3_sp.png')] md:bg-[url('/images/bg_3.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 md:left-auto md:bottom-auto md:top-16 md:right-36">
        <Image
          className="hidden md:block"
          src="/images/ricky_words_pc_7.svg"
          width={305.54}
          height={137}
          alt="今も大切に受け継がれています！"
        />
        <Image
          className="block md:hidden"
          src="/images/ricky_words_sp_7.svg"
          width={145}
          height={60}
          alt="今も大切に受け継がれています！"
        />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50svh] right-[10vw] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[calc(50svh+50px)] right-[calc(10vw-75px)] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[5svh] right-[calc(30vw-50px)] z-10 hidden transition-all duration-500 md:block`}
      >
        <Image src="/images/banba_front_anime_bless.png" width={144} height={152} alt="息" />
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
            <span className="block text-lg font-bold md:text-4xl">ばんえい競馬の伝統</span>
            <span className="block text-xs md:text-lg">Tradition of Banei Horse Racing</span>
          </span>
        </h2>
        <div className="max-w-[260px] py-4 md:max-w-[850px]">
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
          <div className="mt-2 border border-gray-500 bg-white p-2 md:mt-4 md:p-4">
            <h3 className="mb-2 text-sm font-bold md:mb-4 md:text-xl">継承されてきた道具</h3>
            <p className="text-xs md:text-base">
              ばんえい競馬は農耕馬・荷役馬から発展したため、馬を操る「馭具」やそりを引く「引き具」など、多数の競争用具があります。
              <br />
              馬具の製造技術が途絶えたことで、関係者は今ある道具を大切に受け継ぐことでばんえい競馬を守っています。
            </p>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 md:mt-4 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            <div className="col-span-2 row-span-2">
              <Zoom
                zoomImg={{
                  src: '/images/tradition_photo_2_zoom.jgp',
                  width: '553',
                  height: '784',
                }}
              >
                <Image
                  className="h-[120px] md:h-auto"
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
            <div className="col-span-3 border border-gray-500 bg-white p-2 md:col-span-2 md:p-4">
              <p className="text-xs md:text-base">
                ばんえい競馬は農耕馬・荷役馬から発展したため、馬を操る「馭具」やそりを引く「引き具」など、多数の競争用具があります。
                <br />
                馬具の製造技術が途絶えたことで、関係者は今ある道具を大切に受け継ぐことでばんえい競馬を守っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaneiTradition
