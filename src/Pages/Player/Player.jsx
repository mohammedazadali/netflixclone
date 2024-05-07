import React, { useEffect, useState } from 'react'
import './Player.css'
import back from '../../Assest/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {
  const navigate = useNavigate();
  const[apidata,setApidata]=useState({
    name:'',
    key:'',
    published_at:'',
    type:''
  })
  const {id} = useParams();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzVhZTAwNmMzZDY3ODU1MjY4YWRmYmJjZDE1NjFjYSIsInN1YiI6IjY2M2EwMTgxY2MyNzdjMDEyOTI0YTdiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FLZRCqjBFi4ZHU29MLAtJGqBcyt4J56sppSeg8cwSWE'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApidata(response.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <section className="player_page">
        <img src={back} className='back' onClick={()=>{
          navigate(-2)
        }}/>
        <iframe src= {`https://www.youtube.com/embed/${apidata.key}`} frameBorder={0} allowFullScreen></iframe>
        <div className="movie_info">
          <p>{apidata.published_at.slice(0,10)}</p>
          <p>{apidata.name}</p>
          <p>{apidata.type}</p>
        </div>
    </section>
  )
}

export default Player