import Image from 'next/image'
import { useEffect, useState } from 'react'

const Loading = () => {
  const [loading, setLoading] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setLoading((t) => (t < 100 ? t + 1 : t))
    }, 25)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-green">
      <div className="relative">
        <p className="absolute left-0 top-1/2 w-full translate-y-[-50%] text-center text-4xl font-bold text-white">
          <span className="text-6xl">{loading}</span>%
        </p>
        <Image src="/images/loading.png" alt="loading" width={316.15} height={310.05} />
      </div>
    </div>
  )
}

export default Loading
