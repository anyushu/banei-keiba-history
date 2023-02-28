const FloatRicky = ({ activeSection }: { activeSection: number }) => {
  return (
    <>
      {/* リッキーくん右上 */}
      <div
        className={`${activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'} ${
          activeSection == 4 || activeSection == 7 ? '-bottom-5' : 'bottom-0'
        } fixed -left-10  z-10 h-[100px] w-[100px] bg-[url('/images/ricky_float_sp.png')] bg-contain bg-no-repeat transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-0 lg:right-0 lg:h-60 lg:w-36 lg:bg-[url('/images/ricky_float.png')]`}
      ></div>
    </>
  )
}

export default FloatRicky
