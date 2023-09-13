import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import Musicplayer from "../MusicPlayer/MusicPlayer";
import Controls from "../Contorls/controls";

import playpause from "../context/playpause";


function Home(){

  const[songsdata,setSongsData] = useState([]);
  const audioEl = useRef();
  const[info,setInfo] = useState(null);
  const[val,setVal]=useState(null);


async function getTrendingList(){
const response = await fetch('https://academics.newtonschool.co/api/v1/music/song', {
  headers: {
      'projectId': 'f104bi07c490'
  }
})

const data = await response.json();
 

setSongsData(data.data);

}

  useEffect(()=>{
    getTrendingList();

  },[])

const childHandler=(info)=>{
console.log(info);
setInfo(info);
} 


return(
      <>

<div className="frontHero">
   <div className="frontHero__container">

     <div className="frontHero__content frontHero__connectSlide frontHero__connectSlide--backgroundFeaturedArtists"><h2 className="frontHero__title">Connect on SoundCloud</h2>
     <p className="frontHero__tagline sc-type-large sc-text-h3">
           Discover, stream, and share a constantly expanding mix of music from emerging and major artists around the world.
    </p>
<div className="frontHero__cta">
  <button type="button" className="g-opacity-transition frontHero__ctaButton sc-button sc-button-cta sc-button-primary sc-button sc-button-medium signupButton" tabIndex="0" title="Create a SoundCloud account" aria-label="Create a SoundCloud account">Sign up for free</button>
</div>

<h1 className="frontHero__logo" title="SoundCloud wishes peace and safety for our community in Ukraine">SoundCloud</h1>
<div className="frontHero__signin">
  <button type="button" className="g-opacity-transition frontHero__loginButton g-button-transparent-inverted sc-button sc-button-medium loginButton sc-button-tertiary" tabIndex="0" title="Sign in" aria-label="Sign in">Sign in</button>
  <button type="button" className="g-opacity-transition frontHero__createAccountButton sc-button sc-button-medium signupButton sc-button-cta sc-button-primary" tabIndex="0" title="Create a SoundCloud account" aria-label="Create a SoundCloud account">Create account</button>
  <a href="https://artists.soundcloud.com" target="_blank" className="frontHero__creatorsButton g-button-transparent-inverted sc-button sc-button-medium" tabIndex="0">
    For Artists
  </a>
</div>
</div>

</div>
</div>

<div className="input-search-container">
      <div className="input-search">
        <input style={{width:"90%"}} type="search" placeholder="Search for artists, bands, tracks, podcasts" />
       
        <span className="input-search-button">
        <button className="headerSearch__submit sc-ir" type="submit">Search</button>
        </span> </div>
</div>


  <div className="trendingTracks__title sc-font-light">Hear what’s trending for free in the SoundCloud community</div>




      <div className="trending-songs-list">
        {
          songsdata.map((val)=>{
            return(
      
            <div className="album-card">
              
              <div style={{position:'relative'}}>
               <img className="image" src={val.thumbnail}/>
               <div className="play-button">
                <button onClick={()=>{
           setVal(val);
           info.current.src=val.audio_url;

           
  // console.log(info,"info");
;
  
 
} }><FontAwesomeIcon icon={faPlay} style={{height:'45px'}} /></button>
              </div>
              </div>

              <div className="title-track">
                <p>{val.title}</p>
              </div>

             
           
        </div>)}) 
        }


      </div>

      <Musicplayer childHandler={childHandler} info={info} val={val} songsdata={songsdata}/>
     

</>
    );

}

export default Home;
