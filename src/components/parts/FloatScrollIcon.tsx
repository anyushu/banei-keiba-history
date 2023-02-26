import Image from 'next/image'

const FloatScrollIcon = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
      } fixed top-2 -right-2 left-auto z-10 transition-all duration-500 md:top-4 md:right-auto md:left-4`}
    >
      <Image
        className="h-[60px] md:h-auto"
        src="/images/float_scroll.svg"
        width={55.89}
        height={120}
        alt="scroll"
      />
    </div>
  )
}

export default FloatScrollIcon
