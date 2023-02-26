import Image from 'next/image'

const Loading = ({ loading }: { loading: number }) => {
  return (
    <div className={`${loading == 100 && 'animate-fade-out'}`}>
      <div className="absolute top-0 left-0 z-50 flex h-[100svh] w-screen items-center justify-center bg-green">
        <div className="relative">
          <p className="absolute left-0 top-1/2 w-full translate-y-[-50%] text-center text-4xl font-bold text-white">
            <span className="text-6xl">{loading}</span>%
          </p>
          <Image
            priority={true}
            src="/images/loading.png"
            alt="loading"
            width={316.15}
            height={310.05}
          />
        </div>
      </div>
    </div>
  )
}

export default Loading
