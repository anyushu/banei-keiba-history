const FloatRicky = ({ activeSection }: { activeSection: number }) => {
  return (
    <>
      {/* リッキーくん右上 */}
      <div
        className={`${
          activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
        } fixed -left-10 bottom-0 z-10 h-[100px] w-[100px] bg-[url('/images/ricky_float_sp.png')] bg-contain bg-no-repeat transition-all duration-500 md:left-auto md:bottom-auto md:top-0 md:right-0 md:h-60 md:w-36 md:bg-[url('/images/ricky_float.png')]`}
      ></div>
    </>
  )
}

export default FloatRicky
