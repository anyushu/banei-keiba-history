import Image from 'next/image'

const FloatBless = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection > 0 ? 'opacity-100' : 'opacity-0'
      } fixed bottom-[10dvh] right-[calc(25vw-10px)] z-10 w-[50px] transition-all duration-500 lg:bottom-[5dvh] lg:right-[calc(30vw-50px)] lg:w-auto`}
    >
      <Image src="/images/banba_front_anime_bless.png" width={144} height={152} alt="息" />
    </div>
  )
}

export default FloatBless
