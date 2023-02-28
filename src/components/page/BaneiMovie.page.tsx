import Image from 'next/image'

const BaneiMovie = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_4_sp.png')] md:bg-[url('/images/bg_4.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 md:left-auto md:bottom-auto md:top-16 md:right-36">
        <Image
          className="hidden md:block"
          src="/images/ricky_words_pc_10.svg"
          width={362.72}
          height={191.85}
          alt="ばんえいの歴史がわかるスペシャルムービーです！"
        />
        <Image
          className="block md:hidden"
          src="/images/ricky_words_sp_10.svg"
          width={180}
          height={60}
          alt="ばんえいの歴史がわかるスペシャルムービーです！"
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

      <div className="container overflow-x-hidden mx-auto h-[100svh] w-screen py-4 px-3 md:px-0">
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 md:h-auto md:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold md:text-4xl">
              SPECIAL MOVIE
              <br className=" inline md:hidden" />
              「ばんえい競馬の歴史」
            </span>
            <span className="block text-xs md:text-lg">
              SPECIAL MOVIE “History of Banei Horse Racing”
            </span>
          </span>
        </h2>

        <div className="mt-12 max-w-[850px] py-4 md:mt-0">
          <Image src="/images/movie_sample.png" width={961} height={542} alt="sample" />
        </div>
      </div>
    </div>
  )
}

export default BaneiMovie
