import Image from 'next/image'

const BaneiTradition = ({ activeSection }: { activeSection: number }) => {
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
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[5vh] right-[calc(30vw-50px)] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_bless.png" width={144} height={152} alt="息" />
      </div>

      <div className="container mx-auto h-screen w-screen py-4">
        <h2 className="flex items-center">
          <Image src="/images/icon_hidume.png" width={140} height={140} alt="蹄" />
          <span>
            <span className="block text-4xl font-bold">ばんえい競馬の伝統</span>
            <span className="block text-lg">Tradition of Banei Horse Racing</span>
          </span>
        </h2>
        <div className="max-w-[850px] py-4">
          <div className="flex items-start justify-center">
            <Image
              src="/images/tradition_photo_1.png"
              width={848}
              height={330}
              alt="ばんえい競馬の伝統"
            />
          </div>
          <div className="mt-4 border border-gray-500 bg-white p-4">
            <h3 className="mb-4 text-xl font-bold">継承されてきた道具</h3>
            <p>
              ばんえい競馬は農耕馬・荷役馬から発展したため、馬を操る「馭具」やそりを引く「引き具」など、多数の競争用具があります。
              <br />
              馬具の製造技術が途絶えたことで、関係者は今ある道具を大切に受け継ぐことでばんえい競馬を守っています。
            </p>
          </div>
          <div className="mt-4 grid grid-cols-4 grid-rows-2 gap-4">
            <div className="relative col-span-2 row-span-2">
              <Image fill src="/images/tradition_photo_2.png" alt="ばんえい競馬の伝統" />
            </div>
            <div className="relative col-span-1">
              <Image
                src="/images/tradition_photo_3.png"
                width={400}
                height={347}
                alt="ばんえい競馬の伝統"
              />
            </div>
            <div className="relative col-span-1">
              <Image
                src="/images/tradition_photo_4.png"
                width={400}
                height={347}
                alt="ばんえい競馬の伝統"
              />
            </div>
            <div className="col-span-2 border border-gray-500 bg-white p-4">
              <p>
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
