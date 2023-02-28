import React from 'react'
import { useState,useEffect } from "react"
import Bottom from '../Components/Bottom/Bottom';
import Navbar from '../Components/Navbar/Navbar';
import Router from '../Components/Router/Router';


export default function Home() {
    const [input, setInput] = useState({
        moviename: "",
        moviedetails: {},
        namedetails: [],
      
    
      })

     
        
    
    
    
    
      const inputchanger = (event) => {
        console.log(event.target.name);
    
        const value = event.target.value
        setInput({ ...input, moviename: value })
        console.log(input);
      }
    
    
      const Searchbutton = (event) => {
        event.preventDefault()
        console.log(input.moviename);
        fetch(`https://www.omdbapi.com/?s=${input.moviename}&apikey=44907441`)
          .then(res => res.json())
          .then(response => {
            console.log(response)
    
    
            const movieData = {
              Poster: response?.Search[0]?.Poster,
              Title: response?.Search[0]?.Title,
              Type: response?.Search[0]?.Type,
              Year: response?.Search[0]?.Year,
              imdbID: response?.Search[0]?.imdbID
            }
            console.log(movieData);
    
            setInput({
              ...input,
              moviedetails: movieData,
              namedetails: response.Search,
              
            })
            console.log(input);
    
          })
    
    
      }
    
      console.log(input.namedetails);
  return (
    
    <div className="firstdiv">
      <div>
        <Navbar inputchange={inputchanger} submitbutton={Searchbutton}/>
        <Bottom bottomdata={input.namedetails}/>
        
      </div>
    </div>
  )
}
