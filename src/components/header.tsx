import '../App.css'

import logo from '../assets/logo.png'

export default function Header() {
  const aClass = 'hover:text-blue-600 hover:scale-125 transition-all duration-200'

  return (
    <div className=" mt-6  border-2 h-24 justify-center text-xl items-center shadow-lg bg-white text-black flex capitalize flex-row gap-32 ">
      <img src={logo} alt="" className=' mr-8' />
      <a href="/user" className={aClass}>user</a>
      <a href="" className={aClass}>management</a>
      <a href="" className={aClass}>Notifiction</a>
      <a href="/reportal" className=' hover:text-blue-600 hover:scale-125 transition-all duration-200'>report</a>
      <a href="/setting" className={aClass}>setting</a>
      <a href="" className={aClass}>signout</a>
    </div>
  )
}
