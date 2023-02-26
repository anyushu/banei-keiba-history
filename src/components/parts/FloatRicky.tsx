const words = [
  '',
  'レーススタート！',
  '世界でも例のない\nユニークな競馬！',
  '最初の関門\n第一障害！',
  '伝統と歴史ある\n馬文化なのです！',
  '元々は\n農耕馬で外国馬！',
  '第二障害！\n力を貯めろ！',
  '今も大切に\n受け継がれています！',
  '偉大な\n先輩たちです',
  '気軽に\n遊びに来てね！',
  'ばんえいの歴史がわかる\nスペシャルムービーです！',
  'ゴールは目前！\nあとひと踏ん張り！',
]

const FloatRicky = ({ activeSection }: { activeSection: number }) => {
  return (
    <>
      {/* リッキーくん右上 */}
      <div
        className={`${
          activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
        } fixed -left-10 bottom-0 z-10 h-[100px] w-[100px] bg-[url('/images/ricky_float_sp.png')] bg-contain bg-no-repeat transition-all duration-500 md:left-auto md:bottom-auto md:top-0 md:right-0 md:h-60 md:w-36 md:bg-[url('/images/ricky_float.png')]`}
      ></div>
      {/* リッキーくん吹き出し */}
      {activeSection in words && (
        <div
          className={`${activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'} ${
            activeSection == 10 ? 'w-[180px]' : 'w-[150px]'
          } fixed left-[60px] bottom-[40px] top-auto right-auto z-10 flex h-[60px] items-center justify-start bg-[url('/images/ricky_float_words_sp.png')] bg-size-100% bg-no-repeat transition-all duration-500 md:left-auto md:bottom-auto md:top-16 md:right-36 md:h-[115px] md:w-[305px] md:bg-[url('/images/ricky_float_words.png')]`}
        >
          <div className="pl-6 pr-1 md:px-10">
            <p
              className={`whitespace-pre-wrap font-bold ${
                activeSection == 10 ? 'text-xs md:text-lg' : 'text-xs md:text-xl'
              }`}
            >
              {words[activeSection]}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default FloatRicky
