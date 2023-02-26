import Image from 'next/image'

const BaneiMovie = ({ activeSection }: { activeSection: number }) => {
  return (
    <div className="section bg-[url('/images/bg_4_sp.png')] md:bg-[url('/images/bg_4.png')]">
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
