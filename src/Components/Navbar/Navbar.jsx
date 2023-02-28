import React from 'react'
import "./navbar.css"
import Search from '@mui/icons-material/Search';

export default function Navbar({ inputchange, submitbutton }) {

    return (
        <div>

            <div className='navbar'>
                <a href="#">
                    <img src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png" width="50" height="50" alt="" />
                    <p className='moviename'>MovieZone</p>
                </a>

                <form onSubmit={submitbutton}>
                    <div className='searchboxes'>
                        <input className='searchboxer' onChange={inputchange} name='search' placeholder='Moviename' />
                    </div>

                    <div className='searchicon' onClick={submitbutton}>
                        <Search />
                    </div>
                </form>



            </div>
        </div >
    )
}