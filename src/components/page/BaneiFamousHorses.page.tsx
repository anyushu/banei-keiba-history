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
    <div className="section bg-[url('/images/bg_3_sp.png')] lg:bg-[url('/images/bg_3.png')]">
      <div className="fixed left-[60px] bottom-[40px] top-auto right-auto z-10 transition-all duration-500 lg:left-auto lg:bottom-auto lg:top-16 lg:right-36">
        <Image
          className="hidden lg:block"
          src="/images/ricky_words_pc_8.svg"
          width={305.54}
          height={137}
          alt="名馬たち"
        />
        <Image
          className="block lg:hidden"
          src="/images/ricky_words_sp_8.svg"
          width={145}
          height={60}
          alt="名馬たち"
        />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[50dvh] right-[10vw] z-10 hidden transition-all duration-500 lg:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[calc(50dvh+50px)] right-[calc(10vw-75px)] z-10 hidden transition-all duration-500 lg:block`}
      >
        <Image src="/images/banba_front_anime_sweat_1.png" width={154} height={107} alt="汗" />
      </div>
      <div
        className={`${
          activeSection > 0 ? 'opacity-100' : 'opacity-0'
        } fixed bottom-[5dvh] right-[calc(30vw-50px)] z-10 hidden transition-all duration-500 lg:block`}
      >
        <Image src="/images/banba_front_anime_bless.png" width={144} height={152} alt="息" />
      </div>

      <div className="container mx-auto py-1 px-3 lg:py-4 lg:px-0">
        <h2 className="flex items-center">
          <Image
            className="h-14 w-14 lg:h-auto lg:w-auto"
            src="/images/icon_hidume.png"
            width={140}
            height={140}
            alt="蹄"
          />
          <span>
            <span className="block text-lg font-bold lg:text-4xl">「ばんえい」が誇る名馬たち</span>
            <span className="block text-xs lg:text-lg">Famous horses that Banei is proud of</span>
          </span>
        </h2>

        <div className="max-w-[850px] overflow-hidden py-2 lg:py-4">
          <Slider
            className="mt-[5dvh]"
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            centerMode={true}
            centerPadding="100px"
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  centerPadding: '60px',
                },
              },
            ]}
          >
            <Image
              className="cursor-pointer"
              onClick={() => setSlider1ModalIsOpenOpen(true)}
              src="/images/famous_horses_1.png"
              width={640}
              height={480}
              alt="イレネー"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider3ModalIsOpenOpen(true)}
              src="/images/famous_horses_3.png"
              width={640}
              height={480}
              alt="キンタロー"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider6ModalIsOpenOpen(true)}
              src="/images/famous_horses_6.png"
              width={640}
              height={480}
              alt="マルセンバージ"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider4ModalIsOpenOpen(true)}
              src="/images/famous_horses_4.png"
              width={640}
              height={480}
              alt="スーパーペガサス"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider2ModalIsOpenOpen(true)}
              src="/images/famous_horses_2.png"
              width={640}
              height={480}
              alt="カネサブラック"
            />
            <Image
              className="cursor-pointer"
              onClick={() => setSlider5ModalIsOpenOpen(true)}
              src="/images/famous_horses_5.png"
              width={640}
              height={480}
              alt="ホクショウマサル"
            />
          </Slider>
        </div>
      </div>

      <Modal
        isOpen={slider1ModalIsOpen}
        onRequestClose={() => setSlider1ModalIsOpenOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider1ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/famous_horses_1.png"
            className="mt-auto shrink lg:mt-0"
            width={640}
            height={480}
            alt="名馬"
          />
          <div className="mt-5 mb-auto max-w-md lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-2xl">イレネー</h3>
            <p className="my-3 text-xs lg:text-sm">年代：1908年～1928年</p>
            <p className="text-sm lg:text-base">
              1910年フランスから十勝種馬牧場（現：家畜改良センター十勝牧場）の導入されたペルシュロン種。18年間に1,074頭の種雌馬と配合を行い、579頭の産駒を生産、その子孫はさらに多くの優良馬を生み出しました。「偉大なる種牡馬」として帯広競馬場入口にイレネー像が奉られ、その年デビューした若駒が競う重賞レース「イレネー記念」が3月に開催されています。
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider2ModalIsOpen}
        onRequestClose={() => setSlider2ModalIsOpenOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider2ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/famous_horses_2.png"
            className="mt-auto lg:mt-0"
            width={640}
            height={480}
            alt="名馬"
          />
          <div className="mt-5 mb-auto max-w-md lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-2xl">カネサブラック</h3>
            <p className="my-3 text-xs lg:text-sm">現役期間：2004年～2013年</p>
            <p className="text-sm lg:text-base">
              「ばんえい記念」を3勝、4市重賞「帯広記念」「旭川記念」「岩見沢記念」「北見記念」を全制覇。2019年にオレノココロが更新しますが、重賞最多21勝記録を達成。186戦72勝。
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider3ModalIsOpen}
        onRequestClose={() => setSlider3ModalIsOpenOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider3ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/famous_horses_3.png"
            className="mt-auto lg:mt-0"
            width={640}
            height={480}
            alt="名馬"
          />
          <div className="mt-5 mb-auto max-w-md lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-2xl">キンタロー</h3>
            <p className="my-3 text-xs lg:text-sm">現役期間：1979年～1986年</p>
            <p className="text-sm lg:text-base">
              ばんえい史上初の賞金1億円馬。「農林水産大臣賞典」（現：ばんえい記念）を3度優勝するなど、スターホースとして当時の競馬場に活気をもたらし、現在も語り継がれる名馬です。102戦32勝。
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider4ModalIsOpen}
        onRequestClose={() => setSlider4ModalIsOpenOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider4ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/famous_horses_4.png"
            className="mt-auto lg:mt-0"
            width={640}
            height={480}
            alt="名馬"
          />
          <div className="mt-5 mb-auto max-w-md lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-2xl">スーパーペガサス</h3>
            <p className="my-3 text-xs lg:text-sm">現役期間：1998年～2007年</p>
            <p className="text-sm lg:text-base">
              2003年から2006年にかけて「ばんえい記念」を4連覇。「ばんえい記念」4勝は現在もこの馬1頭のみ。155戦42勝中、重賞は20勝と華々しい結果を残しました。
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider5ModalIsOpen}
        onRequestClose={() => setSlider5ModalIsOpenOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider5ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/famous_horses_5.png"
            className="mt-auto lg:mt-0"
            width={640}
            height={480}
            alt="名馬"
          />
          <div className="mt-5 mb-auto max-w-md lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-2xl">ホクショウマサル</h3>
            <p className="my-3 text-xs lg:text-sm">現役期間：2013年～2021年</p>
            <p className="text-sm lg:text-base">
              2歳「イレネー記念」、3歳「ばんえいダービー」の世代王者になるも、病気が悪化し長期休養。病を乗り越えた復帰後に、地方競馬公式最多連勝記録となる31連勝を達成。そして「ばんえい記念」2度目の挑戦で優勝しました。その後病に倒れ、まさに波乱万丈な生涯となりました。125戦48勝。
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={slider6ModalIsOpen}
        onRequestClose={() => setSlider6ModalIsOpenOpen(false)}
        style={modalStyle}
        ariaHideApp={false}
      >
        <button
          className=" absolute top-0 right-0"
          type="button"
          onClick={() => setSlider6ModalIsOpenOpen(false)}
        >
          <Image src="/images/icon_close.svg" width={52} height={52} alt="close" />
        </button>
        <div className="flex h-full flex-col items-center lg:flex-row lg:px-11">
          <Image
            src="/images/famous_horses_6.png"
            className="mt-auto lg:mt-0"
            width={640}
            height={480}
            alt="名馬"
          />
          <div className="mt-5 mb-auto max-w-md lg:my-0 lg:ml-12">
            <h3 className="mb-3 text-lg lg:text-2xl">マルセンバージ</h3>
            <p className="my-3 text-xs lg:text-sm">現役期間：1988年～1995年</p>
            <p className="text-sm lg:text-base">
              ベルジャン種の純血。純血種で「ばんえい記念」を優勝したのはこの馬のみ。農林水産大臣賞典（現：ばんえい記念）を2度優勝するなど、139戦27勝を挙げました。
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default BaneiFamousHorses
