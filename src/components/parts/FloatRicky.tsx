const FloatRicky = ({ activeSection }: { activeSection: number }) => {
  return (
    <>
      {/* リッキーくん右上 */}
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed top-0 right-0 z-10 h-60 w-36 bg-[url('/images/ricky_float.png')] bg-contain bg-no-repeat transition-all duration-500`}
      ></div>
      {/* リッキーくん吹き出し */}
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed top-16 right-36 z-10 h-[115px] w-[305px] bg-[url('/images/ricky_float_words.png')] bg-contain bg-no-repeat transition-all duration-500`}
      >
        <div className="flex items-center justify-start p-10">
          <p className="text-2xl font-bold">レーススタート！</p>
        </div>
      </div>
    </>
  )
}

export default FloatRicky
