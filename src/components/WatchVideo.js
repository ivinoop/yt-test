import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchVideo = () => {
  const dispatch = useDispatch()

  const [searchParams] = useSearchParams()
  console.log(searchParams.get('v'))

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div className='col-span-12 mt-2 px-10'>
      <iframe
        width='1200'
        height='600'
        src={'https://www.youtube.com/embed/' + searchParams.get('v')}
        title='YouTube Video Player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default WatchVideo
