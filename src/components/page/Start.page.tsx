import Image from 'next/image'
import { useState } from 'react'

const Start = () => {
  const [over, setOver] = useState(false)
  const changeBeforeRicky = () => {
    setTimeout(() => {
      setOver(false)
    }, 500)
  }
  const changeAfterRicky = () => {
    setTimeout(() => {
      setOver(true)
    }, 500)
  }
  return (
    <div id="startPage" className="section bg-white">
      <div className="container mx-auto h-screen w-screen px-4 md:px-0">
        <div className="py-4 md:max-w-[33vw] md:py-10">
          <Image src="/images/logo.png" alt="サイト名" width={554.79} height={130.27} />
        </div>
        <div className="my-[15vh] flex items-center justify-center md:my-0">
          <div
            className="group h-[40vh] w-auto md:h-[50vh]"
            onMouseOver={changeAfterRicky}
            onMouseOut={changeBeforeRicky}
          >
            <Image
              priority={true}
              className="h-full w-auto transition-all duration-1000 group-hover:rotate-y-360"
              src={`${over ? '/images/ricky_after.png' : '/images/ricky_before.png'}`}
              alt="リッキーくん"
              width={453.33}
              height={600}
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <button type="button" className="">
            <Image
              className="drop-shadow-xl"
              src="/images/btn_start.png"
              alt="スタート"
              width={354}
              height={58}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Start
