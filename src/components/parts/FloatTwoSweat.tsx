import Image from 'next/image'

const FloatTwoSweat = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection > 0 ? 'opacity-100' : 'opacity-0'
      } fixed right-[calc(5vw-25px)] bottom-[35dvh] z-10 w-[50px] transition-all duration-500 lg:bottom-[calc(50dvh+50px)] lg:right-[calc(10vw-75px)] lg:w-auto`}
    >
      <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
    </div>
  )
}

export default FloatTwoSweat
