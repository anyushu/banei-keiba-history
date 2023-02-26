import Image from 'next/image'
import Slider from 'react-slick'

const BaneiFamousHorses = ({ activeSection }: { activeSection: number }) => {
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
            <span className="block text-4xl font-bold">「ばんえい」が誇る名馬たち</span>
            <span className="block text-lg">Famous horses that Banei is proud of</span>
          </span>
        </h2>

        <div className="max-w-[850px] py-4">
          <Slider
            className="mt-[5vh]"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            centerMode={true}
            centerPadding="100px"
          >
            <Image src="/images/famous_horses_1.png" width={640} height={480} alt="名馬" />
            <Image src="/images/famous_horses_2.png" width={640} height={480} alt="名馬" />
            <Image src="/images/famous_horses_3.png" width={640} height={480} alt="名馬" />
            <Image src="/images/famous_horses_4.png" width={640} height={480} alt="名馬" />
            <Image src="/images/famous_horses_5.png" width={640} height={480} alt="名馬" />
            <Image src="/images/famous_horses_6.png" width={640} height={480} alt="名馬" />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default BaneiFamousHorses
