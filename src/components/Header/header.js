import { blue } from '@mui/material/colors';
import React from 'react'
import SignIn from '../signIn/signIn';
import '../Home/home.css'
import Home from '../Home/home';
import {FontAwesomeIcon} from 'react-icons'



function Header(){
return(
<>
<header>
    <div className='Top-header'>
    <div className='left-header'>
        <img style={{height: "46px",width:"100px"}} src='https://e7.pngegg.com/pngimages/127/739/png-clipart-logo-soundcloud-computer-icons-soundcloud-logo-logo-black-thumbnail.png' /><span>Soundcloud</span>
    </div>
    <div className="left-Nav-bar">
        <div>Home</div>
        <div>Feed</div>
        <div>Library</div>
    </div>
    <div className="mid-section">    
   <form>
   <input className="headerSearch__input sc-input g-all-transitions-300" placeholder="Search for artists, bands, tracks, podcasts" type="search" name="q" autoComplete="off" aria-label="Search" aria-autocomplete="list" aria-owns="searchMenuList" />
   <button className="headerSearch__submit sc-ir" type="submit"></button>
   </form>
    </div>

    <div className="right-Nav-bar">
        <div>
        <button className="font-bold bg-blue-600 px-6 py-3 text-white rounded-md">Sign In</button>
        </div>
       
        <div>
        <button className="font-bold bg-blue-600 px-6 py-3 text-white rounded-md">Create Account</button>
        </div>
        <div>
            Upload
        </div>
        </div>
        </div>
      </header>
    {/* <Home /> */}
     
</>
);

}

export default Header;