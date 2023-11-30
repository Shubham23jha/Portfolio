import IntroVideo1 from '../assets/IntroVideo.mp4';

function Background(){ 
  return(
    <div>
     <video src={IntroVideo1} autoPlay loop muted className='bg-video'/>
    </div>
  );
}
export default Background;