const FloatBanbaAction = ({ activeSection }: { activeSection: number }) => {
  return (
    <>
      {/* 馬アニメーション右下 */}
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-0 right-0 z-10 h-0 w-[30vw] animate-banba-action pt-[60vh] transition-all duration-500`}
      ></div>
    </>
  )
}

export default FloatBanbaAction
