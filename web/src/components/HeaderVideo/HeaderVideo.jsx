import './HeaderVideo.css'
import video from '../../assets/videos/video.mp4'

function HeaderVideo() {

    return (
        <>
            <div className='video'>
                <video autoplay controls style={{ height: '400px', width: '100%' }} src={video} type="video/mp4" ></video>
            </div>
        </>

    )
}

export default HeaderVideo