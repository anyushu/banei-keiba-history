import Image from 'next/image'

const FloatScrollIcon = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
      } fixed top-4 left-4 z-10 transition-all duration-500`}
    >
      <Image src="/images/float_scroll.svg" width={55.89} height={120} alt="scroll" />
    </div>
  )
}

export default FloatScrollIcon
