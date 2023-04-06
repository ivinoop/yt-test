import {
  HiBars3BottomLeft,
  HiOutlineVideoCamera,
  HiOutlineBell,
  HiOutlineUserCircle,
  HiMagnifyingGlass,
} from 'react-icons/hi2'
import Logo from '../../public/img/yt-logo.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
  const dispatch = useDispatch()

  const handleToggleMenu = () => {
    dispatch(toggleMenu())
  }
  return (
    <header className='py-2 px-5 shadow-md sticky top-0 bg-white z-30'>
      <nav className='grid grid-flow-col p-2'>
        <div className='flex items-center col-span-1'>
          <HiBars3BottomLeft
            className='cursor-pointer h-6 w-6'
            onClick={() => handleToggleMenu()}
          />
          <a href='/' className='flex items-center'>
            <img
              src={Logo}
              alt='logo'
              className='h-12 cursor-pointer rounded-xl'
            />
          </a>
          <a href='/'>
            <h1 className='font-bold text-xl'>YouTube</h1>
          </a>
        </div>
        <div className='flex col-span-6'>
          <input
            className='border border-slate-400  rounded-l-full w-full px-2 focus:outline-none'
            type='text'
            placeholder='Search'
          />
          <button className='bg-slate-100 border border-slate-400 border-l-0 rounded-r-full cursor-pointer'>
            <HiMagnifyingGlass className='w-12' />
          </button>
        </div>
        <div className='flex justify-around items-center col-span-1 ml-2 bg-slate-200 rounded-full'>
          <HiOutlineVideoCamera className='nav-right-icon' />
          <HiOutlineBell className='nav-right-icon' />
          <HiOutlineUserCircle className='nav-right-icon' />
        </div>
      </nav>
    </header>
  )
}

export default Header
