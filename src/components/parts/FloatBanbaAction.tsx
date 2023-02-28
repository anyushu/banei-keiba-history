const FloatBanbaAction = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
      } fixed bottom-0 right-0 z-10 h-0 w-[25vw] animate-banba-action pt-[35dvh] transition-all duration-500 lg:w-[30vw] lg:pt-[60dvh]`}
    ></div>
  )
}

export default FloatBanbaAction
