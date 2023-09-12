import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import './controls.css';
import { useRef } from 'react';



function Controls({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs}) {

  const clickRef = useRef();

  const playPause = ()=>
  {
    setisplaying(!isplaying);

  }


  const checkWidth = (e)=>
  {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * currentSong.length;

  }

  const skipBack = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);
    if (index === 0)
    {
      setCurrentSong(songs[songs.length - 1])
    }
    else
    {
      setCurrentSong(songs[index - 1])
    }
    audioElem.current.currentTime = 0;
    
  }


  const skiptoNext = ()=>
  {
    const index = songs.findIndex(x=>x.title === currentSong.title);

    if (index === songs.length-1)
    {
      setCurrentSong(songs[0])
    }
    else
    {
      setCurrentSong(songs[index + 1])
    }
    audioElem.current.currentTime = 0;
    
  }

   
  return(

<>

<div className="player-controls">

        <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong?.progress+"%"}`}}></div>
        </div>
        </div>

        <div>
           
                <FontAwesomeIcon icon={faBackward} onClick={skipBack} />
          
            
               {isplaying ?<FontAwesomeIcon icon= {faPause } onClick={playPause} />:<FontAwesomeIcon icon= {faPlay } onClick={playPause} />}
           

                <FontAwesomeIcon icon={faForward}  onClick={skiptoNext} />
       

        </div>

      

        </div>

</>

  )

}

export default Controls;