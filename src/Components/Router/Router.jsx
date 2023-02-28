import React from 'react'
import "./router.css"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

export default function Router() {

  const [home, setHome] = useState({})



  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=44907441`)
      .then(yes => yes.json())
      .then(jarvis => {
        console.log(jarvis);
        setHome(jarvis)
      })



  }, [])


  return (
    <div className='diver'>
      <div className='firstbox'>
        <div className='innerdiver1'>
          <img className='images' src={home.Poster} alt="" />
        </div>
        <div className='innerdiver2'>
          <p>Title: {home.Title}</p>
          <p>Year: {home.Year}</p>
          <p>Released: {home.Released}</p>
          <p>Genre: {home.Genre}</p>
          <p>Director: {home.Director}</p>
          <p>Writers: {home.Writer}</p>
          <p>Actors:{home.Actors}</p>
          <p>Language: {home.Language}</p>

        </div>
      </div>

    </div>
  )
}
