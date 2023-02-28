import React from 'react'
import { useState } from 'react';
import "./bottom.css"
import "../Router/router.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { maxHeight } from '@mui/system';
import {useNavigate}  from 'react-router-dom'
import Modal from '@mui/material/Modal';

export default function Bottom({ bottomdata }) {
    const navigate=useNavigate()
    
    console.log(bottomdata);

    const Action=(id)=>{
        console.log(id);
     navigate(`/routerpage/${id}`)

     
    }
    const [open, setOpen] = React.useState(false);
    const [home, setHome] = useState({})
  
    const handleClose = () => {
      setOpen(false);
    };
      
    const handleOpen = (id) => {
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=44907441`)
      .then(yes => yes.json())
      .then(jarvis => {
        console.log(jarvis);
        setHome(jarvis)
      })
      setOpen(true);
    };
    return (

        <>


            <div className='row' style={{ padding: "15px" }}  >
                {bottomdata.map((value) =>
                    <div className='col-md-3'  id='img'onClick={()=>{handleOpen(value.imdbID)}}>
                        <Card sx={{ maxWidth: 345, height: 420}} className='cards'>
                            <CardMedia
                                component="img"
                                height="140"
                                image={value.Poster}
                                alt="movie name"
                                className='cardimage'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" style={{textAlign:"center"}} component="div">
                                    {value.Title}
                                </Typography>

                            </CardContent >
                            {/* <div style={{wordWrap:"break-word"}}> */}
                            <p style={{textAlign:"center"}}>Type: {value.Type}</p>
                            <p style={{textAlign:"center"}}>Year: {value.Year}</p>
                            <p style={{textAlign:"center"}}>IMDBID: {value.imdbID}</p>
                            {/* </div> */}
                        </Card>
                    </div>
                    
                )}
                 <div style={{ display: 'block', padding: 30 }}>
     
      <Modal
        onClose={handleClose}
        open={open}
        style={{
        //   position: 'absolute',
        //   backgroundColor: 'gray',
          boxShadow: '2px solid black',
          height:80,
          width: 240,
          margin: 'auto'
        }}
      >
        <div className='firstbox'>
        <div className='innerdiver1'>
          <img className='images' src={home.Poster} alt="" />
        </div>
        <div className='innerdiver2'>
          <p>Title: {home.Title} </p>
          <p>Year: {home.Year}</p>
          <p>Released: {home.Released}</p>
          <p>Genre: {home.Genre}</p>
          <p>Director: {home.Director}</p>
          <p>Writers: {home.Writer}</p>
          <p>Actors: {home.Actors}</p>
          <p>Language: {home.Language}</p>

        </div>
      </div>
      </Modal>
    </div>
            </div>

        </>



    )
}