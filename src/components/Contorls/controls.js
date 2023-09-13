import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import './controls.css';
import { useRef } from 'react';



function Controls({audioElem, isplaying, setisplaying, currentSong}) {

  const clickRef = useRef();
console.log(currentSong);
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

  // const skipBack = ()=>
  // {
  //   const index = songs.findIndex(x=>x.title === currentSong.title);
  //   if (index === 0)
  //   {
  //     setCurrentSong(songs[songs.length - 1])
  //   }
  //   else
  //   {
  //     setCurrentSong(songs[index - 1])
  //   }
  //   audioElem.current.currentTime = 0;
    
  // }


  // const skiptoNext = ()=>
  // {
  //   const index = songs.findIndex(x=>x.title === currentSong.title);

  //   if (index === songs.length-1)
  //   {
  //     setCurrentSong(songs[0])
  //   }
  //   else
  //   {
  //     setCurrentSong(songs[index + 1])
  //   }
  //   audioElem.current.currentTime = 0;
    
  // }

   
  return(

<>
<footer className='footer'>
<div className="player-controls">

     
 

        <div className='controls'>
           
                <FontAwesomeIcon icon={faBackward} />
          
            
               {isplaying?<FontAwesomeIcon icon= {faPause } onClick={playPause} />:<FontAwesomeIcon icon= {faPlay } onClick={playPause} />}
           

                <FontAwesomeIcon icon={faForward} />
       

        </div>

        <div style={{fontSize:'8px'}}>0:{Math.trunc(audioElem.current?.currentTime)}</div>
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div className="seek_bar" style={{width: `${currentSong?.progress+"%"}`}}></div>
        </div>
        <div style={{fontSize:'8px'}}>0:{Math.trunc(currentSong?.length)}
        </div>

        </div>
        </footer>
</>

  )

}

export default Controls;
