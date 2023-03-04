import type { fullpageApi } from '@fullpage/react-fullpage'

const Drawer = ({ fullpage }: { fullpage?: fullpageApi }) => {
  return (
    <div className="drawer-side place-items-center bg-green">
      <label
        htmlFor="my-drawer"
        className="drawer-overlay absolute top-3 right-3 z-50 block h-[32px] w-[40px] cursor-pointer"
      >
        <span className="absolute left-0 top-1/2 block h-[2px] w-full translate-y-[-50%] rotate-45 bg-white"></span>
        <span className="absolute left-0 top-1/2 block h-[2px] w-full translate-y-[-50%] -rotate-45 bg-white"></span>
      </label>
      <ul className="menu mx-auto bg-base-100 p-4 text-white [&_li]:items-center">
        <li>
          <a onClick={() => fullpage?.silentMoveTo(2, 0)}>世界で唯一の「ばんえい競馬」</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(4, 0)}>ばんえいの歩み</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(5, 0)}>ばん馬のルーツ</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(7, 0)}>ばんえい競馬の伝統</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(8, 0)}>「ばんえい」が誇る名馬たち</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(9, 0)}>観光地としての帯広競馬場</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(10, 0)}>SPECIAL MOVIE「ばんえい競馬の歴史」</a>
        </li>
        <li>
          <a onClick={() => fullpage?.silentMoveTo(12, 0)}>GOALS</a>
        </li>
      </ul>
    </div>
  )
}

export default Drawer
