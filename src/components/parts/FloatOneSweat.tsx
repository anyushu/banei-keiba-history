import Image from 'next/image'

const FloatOneSweat = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection > 0 ? 'opacity-100' : 'opacity-0'
      } fixed bottom-[calc(35dvh-10px)] right-[5vw] z-10 w-[50px] transition-all duration-500 lg:bottom-[50dvh] lg:right-[10vw] lg:w-auto`}
    >
      <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
    </div>
  )
}

export default FloatOneSweat
