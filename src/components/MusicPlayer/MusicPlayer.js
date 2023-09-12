import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faForward , faBackward , faPause} from '@fortawesome/free-solid-svg-icons'
import Controls from '../Contorls/controls';


function Musicplayer({songsdata,childHandler,s}){
const songs= songsdata;
console.log(s,"h");
const ref= useRef();
childHandler(ref);



const [isPlaying, setIsPlaying] = useState(false);

const [currentSong, setCurrentSong] = useState(s);



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

    setCurrentSong({ ...s, "progress": ct / duration * 100, "length": duration })

  }


return(      
<>
        
<div>     
    <audio ref={ref} onTimeUpdate={onPlaying}>
      <source src="`https://newton-project-resume-backend.s3.amazonaws.com/audio/${s._id}`"></source>
    </audio>
    <Controls songs={songs} isplaying={isPlaying} setisplaying={setIsPlaying} audioElem={ref} currentSong={s} setCurrentSong={setCurrentSong} />

    
</div>   





</>  
    );
}

export default Musicplayer;