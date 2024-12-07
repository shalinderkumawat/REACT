import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const{id} = useParams();
  const navigat = useNavigate();
  const [apidata , setapidata]=useState({
    name: "",
    key:"",
    published_at:"",
    typeof:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODUwM2FjNDcwYTJmZDM4ODdiOGJiN2Q5MGRlMzljMyIsIm5iZiI6MTczMzQ2MjE3MS44NDE5OTk4LCJzdWIiOiI2NzUyODg5YmFiNmNjM2E0YzhmYzdkMzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9EB7BhjTtGLjW0Ob4P0AJCW7sMCxwyfqVV_Ggn3NGXo'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapidata(res.results[0]))
    .catch(err => console.error(err));

  })
  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>{
        navigat(-2)
      }} />
      <iframe width='90%' height='90%' src={`https;//www.youtube.com/embed/${apidata.key}`}
      title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  ) 
}

export default Player 