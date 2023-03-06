import Image from 'next/image'

const FloatScrollIcon = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
      } fixed top-2 -right-2 left-auto z-10 hidden transition-all duration-500 lg:top-1/2 lg:right-0 lg:block lg:translate-y-[-180px]`}
    >
      <Image
        className="h-[60px] lg:h-[60px]"
        src="/images/float_scroll.svg"
        width={55.89}
        height={120}
        alt="scroll"
      />
    </div>
  )
}

export default FloatScrollIcon
