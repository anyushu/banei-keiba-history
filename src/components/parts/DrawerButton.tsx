const DrawerButton = () => {
  return (
    <label
      htmlFor="my-drawer"
      className="fixed top-3 right-3 z-50 block h-[32px] w-[40px] cursor-pointer"
    >
      <span className="absolute left-0 top-0 block h-[2px] w-full bg-green transition-all"></span>
      <span className="absolute left-0 top-1/2 block h-[2px] w-full translate-y-[-50%] bg-green transition-all"></span>
      <span className="absolute left-0 bottom-0 block h-[2px] w-full bg-green transition-all"></span>
    </label>
  )
}

export default DrawerButton
