import Image from 'next/image'

const BaneiHistory = ({ activeSection }: { activeSection: number }) => {
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
            <span className="block text-4xl font-bold">ばんえいの歩み</span>
            <span className="block text-lg">History of Banei</span>
          </span>
        </h2>
        <div className="max-w-[850px] py-4">
          <div className="flex items-start justify-center">
            <Image src="/images/hidume.png" width={600} height={600} alt="ばんえいの歩み" />
          </div>
          <div className="mt-4 border border-gray-500 bg-white p-4">
            <h3 className="mb-4 text-center text-2xl font-bold">ルーツである「お祭りばん馬」</h3>
            <p>
              農村ではばん馬の力を競わせる娯楽として「お祭りばん馬」が誕生しました。これがばんえい競馬のルーツです。
              <br />
              「そりに乗って馬を操る」というスタイルは、当時の外国人指導者による「馬を一人で操れる技術」が元と言われています。
            </p>
            <p className="mt-3 text-right">写真/長澤和恵</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BaneiHistory
