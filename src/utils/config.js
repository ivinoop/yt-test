const GOOGLE_API_KEY = 'AIzaSyCCtrjoGE-byZCRnksRKqrpAJhJnvUcOVM'

export const YT_VIDS_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`
