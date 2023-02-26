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
        } fixed top-0 right-0 z-10 h-60 w-36 bg-[url('/images/ricky_float.png')] bg-contain bg-no-repeat transition-all duration-500`}
      ></div>
      {/* リッキーくん吹き出し */}
      {activeSection in words && (
        <div
          className={`${
            activeSection == 0 || activeSection == 12 ? 'opacity-0' : 'opacity-100'
          } fixed top-16 right-36 z-10 flex h-[115px] w-[305px] items-center justify-start bg-[url('/images/ricky_float_words.png')] bg-contain bg-no-repeat transition-all duration-500`}
        >
          <div className="px-10">
            <p
              className={`whitespace-pre-wrap font-bold ${
                activeSection == 10 ? 'text-lg' : 'text-xl'
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
