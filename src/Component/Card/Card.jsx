import React, { useEffect, useRef, useState } from 'react'
import './Card.css'
import data from '../../Assest/cards/Cards_data'
import { Link } from 'react-router-dom'

function Card({title,category}) {
  const[apidata,setApidata]=useState([])
  const cardRef = useRef()
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzVhZTAwNmMzZDY3ODU1MjY4YWRmYmJjZDE1NjFjYSIsInN1YiI6IjY2M2EwMTgxY2MyNzdjMDEyOTI0YTdiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLZRCqjBFi4ZHU29MLAtJGqBcyt4J56sppSeg8cwSWE'
    }
  };
  
  
 const handlewheel=(event)=>{
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    cardRef.current.addEventListener('wheel',handlewheel);

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results))
    .catch(err => console.error(err));    
},[])
  return (
    <section className="card_page">
        <h3>{title?title:"Popular on Netflix"}</h3>
         <div className="card_list" ref={cardRef}>
         {
          apidata.map((card,index)=>{
            return(
              <Link to={`/player/${card.id}`}className="card_data" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} />
                <p>{card.original_title}</p>
              </Link>
            )
          })
        }
         </div>
    </section>
  )
}

export default Card