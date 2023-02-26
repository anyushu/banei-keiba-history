import Image from 'next/image'
import { useState } from 'react'
import Modal from 'react-modal'
import Slider from 'react-slick'

const BaneiFamousHorses = ({ activeSection }: { activeSection: number }) => {
  const [slider1ModalIsOpen, setSlider1ModalIsOpenOpen] = useState(false)
  const [slider2ModalIsOpen, setSlider2ModalIsOpenOpen] = useState(false)
  const [slider3ModalIsOpen, setSlider3ModalIsOpenOpen] = useState(false)
  const [slider4ModalIsOpen, setSlider4ModalIsOpenOpen] = useState(false)
  const [slider5ModalIsOpen, setSlider5ModalIsOpenOpen] = useState(false)
  const [slider6ModalIsOpen, setSlider6ModalIsOpenOpen] = useState(false)

  const modalStyle = {
    overlay: {
      zIndex: 99999,
    },
    content: {
      border: 'solid 5px #00B17D',
      borderRadius: 0,
    },
  }

  return (
    <div className="section bg-[url('/images/bg_3_sp.png')] md:bg-[url('/images/bg_3.png')]">
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50vh] right-[10vw] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[calc(50vh+50px)] right-[calc(10vw-75px)] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[5vh] right-[calc(30vw-50px)] z-10 transition-all duration-500`}
      >
        <Image src="/images/banba_front_anime_bless.png" width={144} height={152} alt="息" />
      </div>

      <div className="container mx-auto h-screen w-screen py-4">
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 md:h-auto md:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold md:text-4xl">「ばんえい」が誇る名馬たち</span>
            <span className="block text-xs md:text-lg">Famous horses that Banei is proud of</span>
          </span>
        </h2>

        <div className="max-w-[850px] py-4">
          <Slider
            className="mt-[5vh]"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            centerMode={true}
            centerPadding="100px"
          >
            <Image
              className="cursor-pointer"
              onClick={() => setSlider1ModalIsOpenOpen(true)}
              src="/images/famous_horses_1.png"
              width={640}
              height={480}
              alt="名馬"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider2ModalIsOpenOpen(true)}
              src="/images/famous_horses_2.png"
              width={640}
              height={480}
              alt="名馬"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider3ModalIsOpenOpen(true)}
              src="/images/famous_horses_3.png"
              width={640}
              height={480}
              alt="名馬"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider4ModalIsOpenOpen(true)}
              src="/images/famous_horses_4.png"
              width={640}
              height={480}
              alt="名馬"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider5ModalIsOpenOpen(true)}
              src="/images/famous_horses_5.png"
              width={640}
              height={480}
              alt="名馬"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider6ModalIsOpenOpen(true)}
              src="/images/famous_horses_6.png"
              width={640}
              height={480}
              alt="名馬"
            />
          </Slider>
        </div>
      </div>

      <Modal
        isOpen={slider1ModalIsOpen}
        onRequestClose={() => setSlider1ModalIsOpenOpen(false)}
        style={{
          overlay: {
            zIndex: 99999,
          },
          content: {
            border: 'solid 5px #00B17D',
            borderRadius: 0,
          },
        }}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider1ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image src="/images/famous_horses_1.png" width={640} height={480} alt="名馬" />
          <div className="ml-12">
            <h3 className="mb-3 text-2xl">イレネー</h3>
            <p>テキストが入りますテキストが入ります</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider2ModalIsOpen}
        onRequestClose={() => setSlider2ModalIsOpenOpen(false)}
        style={modalStyle}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider2ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image src="/images/famous_horses_2.png" width={640} height={480} alt="名馬" />
          <div className="ml-12">
            <h3 className="mb-3 text-2xl">カネサブラック</h3>
            <p>テキストが入りますテキストが入ります</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider3ModalIsOpen}
        onRequestClose={() => setSlider3ModalIsOpenOpen(false)}
        style={modalStyle}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider3ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image src="/images/famous_horses_3.png" width={640} height={480} alt="名馬" />
          <div className="ml-12">
            <h3 className="mb-3 text-2xl">キンタロー</h3>
            <p>テキストが入りますテキストが入ります</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider4ModalIsOpen}
        onRequestClose={() => setSlider4ModalIsOpenOpen(false)}
        style={modalStyle}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider4ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image src="/images/famous_horses_4.png" width={640} height={480} alt="名馬" />
          <div className="ml-12">
            <h3 className="mb-3 text-2xl">スーパーペガサス</h3>
            <p>テキストが入りますテキストが入ります</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider5ModalIsOpen}
        onRequestClose={() => setSlider5ModalIsOpenOpen(false)}
        style={modalStyle}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider5ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image src="/images/famous_horses_5.png" width={640} height={480} alt="名馬" />
          <div className="ml-12">
            <h3 className="mb-3 text-2xl">ホクショウマサル</h3>
            <p>テキストが入りますテキストが入ります</p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider6ModalIsOpen}
        onRequestClose={() => setSlider6ModalIsOpenOpen(false)}
        style={modalStyle}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider6ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full items-center px-11">
          <Image src="/images/famous_horses_6.png" width={640} height={480} alt="名馬" />
          <div className="ml-12">
            <h3 className="mb-3 text-2xl">マルセンバージ</h3>
            <p>テキストが入りますテキストが入ります</p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default BaneiFamousHorses
