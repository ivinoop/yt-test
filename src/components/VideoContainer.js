import { useEffect, useState } from 'react'
import { YT_VIDS_API_URL } from '../utils/config'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const videoData = await fetch(YT_VIDS_API_URL)
    const videoJson = await videoData.json()
    console.log(videoJson?.items)
    setVideos(videoJson?.items)
  }
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5'>
      {videos.map((video) => (
        <Link to={'/watch?v=' + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  )
}

export default VideoContainer
