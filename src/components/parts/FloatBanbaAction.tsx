const FloatBanbaAction = ({ activeSection }: { activeSection: number }) => {
  return (
    <div
      className={`${
        activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
      } fixed bottom-0 right-0 z-10 h-0 w-[30vw] animate-banba-action pt-[40vh] transition-all duration-500 md:pt-[60vh]`}
    ></div>
  )
}

export default FloatBanbaAction
