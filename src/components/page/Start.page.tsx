import { fullpageApi } from '@fullpage/react-fullpage'
import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import Slider from 'react-slick'

const Start = ({ fullpageApi }: { fullpageApi: fullpageApi }) => {
  const [over, setOver] = useState(false)
  const [introModal, setIntroModal] = useState(true)
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
  const modalStyle = {
    overlay: {
      zIndex: 40,
    },
    content: {
      border: 'solid 5px #00B17D',
      borderRadius: 0,
    },
  }

  return (
    <div id="startPage" className="section bg-white">
      <div className="container z-10 mx-auto px-4 lg:px-0">
        <div className="flex max-w-full items-center justify-start py-4 lg:max-w-[33vw] lg:py-10">
          <a
            className="mr-3 block"
            href="https://banei-keiba.or.jp/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/header_logo_tokachi.svg"
              alt="ばんえい十勝"
              width={102.63}
              height={130.27}
            />
          </a>
          <div className="mr-6">
            <Image
              src="/images/header_logo_hokkaido.svg"
              alt="北海道遺産"
              width={91.37}
              height={130.27}
            />
          </div>
          <div>
            <Image
              src="/images/header_logo_banei.svg"
              alt="ばんえい競馬場"
              width={441.61}
              height={130.27}
            />
          </div>
        </div>
        <div className="my-[15dvh] flex items-center justify-center lg:my-0">
          <div
            className="group h-[40dvh] w-auto lg:h-[50dvh]"
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
        <div className="z-10 mt-10 text-center">
          <button type="button" onClick={() => fullpageApi.moveSectionDown()}>
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
      <Modal
        isOpen={introModal}
        onRequestClose={() => setIntroModal(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setIntroModal(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div id="introSlide" className="pt-9 lg:px-12 lg:pt-0">
          <Slider
            className="hidden lg:block"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <Image src="/images/intro_pc_1.jpg" width={1232} height={622} alt="はじめに" />
            <Image src="/images/intro_pc_2.jpg" width={1232} height={622} alt="はじめに" />
            <Image src="/images/intro_pc_3.jpg" width={1232} height={622} alt="はじめに" />
          </Slider>
          <Slider
            className="block lg:hidden"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
          >
            <Image src="/images/intro_sp_1.jpg" width={449} height={791} alt="はじめに" />
            <Image src="/images/intro_sp_2.jpg" width={449} height={791} alt="はじめに" />
            <Image src="/images/intro_sp_3.jpg" width={449} height={791} alt="はじめに" />
          </Slider>
        </div>
      </Modal>
    </div>
  )
}

export default Start
