import Image from 'next/image'

const Goals = () => {
  return (
    <div className="section relative bg-[url('/images/bg_goals.png')]">
      <div className="container relative mx-auto h-screen w-screen py-4">
        <h2 className="pt-[3vh] text-center">
          <Image
            className="inline"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span className="block text-5xl font-bold">
            ばんえい競馬を
            <br />
            応援しよう！
          </span>
        </h2>
        <div className="my-5 text-center">
          <a
            href="#"
            className="inline-block rounded bg-green py-3 px-8 text-2xl text-white hover:opacity-80"
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
        </div>
        <Image
          className="absolute bottom-0 -right-8 max-w-[60vw]"
          src="/images/goals_hourse.png"
          width={1095}
          height={394}
          alt="馬"
        />
      </div>
      <Image
        className="absolute bottom-0 left-0 max-w-[35vw]"
        src="/images/goals_ricky_group.svg"
        width={667}
        height={614}
        alt="リッキー"
      />
    </div>
  )
}

export default Goals
