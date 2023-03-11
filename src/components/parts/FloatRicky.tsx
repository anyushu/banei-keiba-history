const FloatRicky = ({ activeSection }: { activeSection: number }) => {
  return (
    <>
      {/* リッキーくん右上 */}
      <div
        className={`${activeSection == 0 || activeSection == 13 ? 'opacity-0' : 'opacity-100'} ${
          activeSection == 4 || activeSection == 8 ? 'animate-ricky-fade-out' : ''
        } fixed bottom-0 -left-10  z-10 h-[100px] w-[100px] bg-[url('/images/ricky_float_sp.png')] bg-contain bg-no-repeat transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-0 lg:right-0 lg:h-60 lg:w-36 lg:bg-[url('/images/ricky_float.png')]`}
      ></div>
    </>
  )
}

export default FloatRicky
