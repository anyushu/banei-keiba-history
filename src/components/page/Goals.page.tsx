import Image from 'next/image'

const Goals = () => {
  return (
    <div
      id="goalsPage"
      className="section relative bg-[url('/images/bg_goals_sp.png')] md:bg-[url('/images/bg_goals.png')]"
    >
      <div className="container relative mx-auto h-[100svh] w-screen py-4">
        <h2 className="relative pt-[3svh] text-center">
          <Image
            className="inline w-[90px] md:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span className="block text-xl font-bold md:text-5xl">
            ばんえい競馬を
            <br />
            応援しよう！
          </span>

          <Image
            className="absolute top-1/2 left-1/2 w-[90px] translate-y-[calc(-50%-25px)] translate-x-[calc(-50%-90px)] md:w-auto md:translate-y-0 md:translate-x-[calc(-50%-18rem)]"
            src="/images/goals_stamp.png"
            width={246}
            height={201}
            alt="ゴール"
          />
        </h2>
        <div className="my-5 text-center">
          <a
            href="#"
            className="inline-block min-w-[260px] rounded bg-green py-3 px-8 text-2xl text-white hover:opacity-80"
          >
            ＼応援する／
          </a>
        </div>
        <div className="text-center">
          <Image
            className="inline"
            src="/images/logo_banei_tokachi.png"
            width={281.42}
            height={131.78}
            alt="ばんえい十勝"
          />
          <Image
            className="-ml-9 mt-4 block max-w-[80vw] md:hidden"
            src="/images/goals_ricky_group_sp.svg"
            width={400}
            height={167}
            alt="リッキー"
          />
        </div>
        <Image
          className="absolute bottom-0 left-0 max-w-[90vw] md:left-auto md:-right-8 md:max-w-[60vw]"
          src="/images/goals_hourse.png"
          width={1095}
          height={394}
          alt="馬"
        />
      </div>
      <Image
        className="absolute bottom-0 left-0 hidden max-w-[35vw] md:block"
        src="/images/goals_ricky_group.svg"
        width={667}
        height={614}
        alt="リッキー"
      />
    </div>
  )
}

export default Goals
