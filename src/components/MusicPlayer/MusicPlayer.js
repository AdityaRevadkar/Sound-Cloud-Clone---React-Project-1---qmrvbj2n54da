import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faForward , faBackward , faPause} from '@fortawesome/free-solid-svg-icons'
import Controls from '../Contorls/controls';


function Musicplayer({childHandler,val}){

// console.log(val," i am aval");
const ref= useRef();
childHandler(ref);



const [isPlaying, setIsPlaying] = useState(false);

const [currentSong, setCurrentSong] = useState(val);


console.log(currentSong,"i am current song");
// console.log(ref);
// console.log(isPlaying);
useEffect(() => {

    if (isPlaying) {
        ref.current.play();
    } else {
        ref.current.pause();
    }
},[isPlaying]);


const onPlaying = () => {
    const duration = ref.current.duration;
    const ct = ref.current.currentTime;

    setCurrentSong({ ...val, "progress": ct / duration * 100, "length": duration })

  }


return(      
<>
        
<div>     
    <audio ref={ref} onTimeUpdate={onPlaying}>
      <source src={currentSong?.audio_url}></source>
    </audio>
    <Controls isplaying={isPlaying} setisplaying={setIsPlaying} audioElem={ref} currentSong={currentSong} setCurrentSong={setCurrentSong} />

    
</div>   





</>  
    );
}

export default Musicplayer;
