import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const CommonLayout = ({ children }: LayoutProps) => {
  return <main>{children}</main>
}

export default CommonLayout
