import Image from 'next/image'

const FloatScrollIcon = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
      } fixed right-0 left-auto top-1/2 z-10 translate-y-[-160px] transition-all duration-500 lg:right-0 lg:translate-y-[-180px]`}
    >
      <Image
        className="h-[40px] lg:h-[60px]"
        src="/images/float_scroll.svg"
        width={55.89}
        height={120}
        alt="scroll"
      />
    </div>
  )
}

export default FloatScrollIcon
