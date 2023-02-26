import Image from 'next/image'

const BaneiHistory = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_2_sp.png')] md:bg-[url('/images/bg_2.png')]">
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
        <div className="max-w-[290px] py-4 md:max-w-[850px]">
          <div className="flex items-start justify-center">
            <Image src="/images/hidume.png" width={600} height={600} alt="ばんえいの歩み" />
          </div>
          <div className="mt-4 border border-gray-500 bg-white p-4">
            <h3 className="mb-4 text-center text-base font-bold md:text-2xl">
              ルーツである「お祭りばん馬」
            </h3>
            <p className="text-xs md:text-base">
              農村ではばん馬の力を競わせる娯楽として「お祭りばん馬」が誕生しました。これがばんえい競馬のルーツです。
              <br />
              「そりに乗って馬を操る」というスタイルは、当時の外国人指導者による「馬を一人で操れる技術」が元と言われています。
            </p>
            <p className="mt-3 text-right text-xs md:text-base">写真/長澤和恵</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaneiHistory
