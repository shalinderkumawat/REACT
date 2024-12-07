import React, { useEffect, useRef, useState } from 'react'
import './TitelCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitelCards = ({title , category}) => {

//   const [apiData , setApiData] = useState([]);
//   const cardsRef = useRef();
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODUwM2FjNDcwYTJmZDM4ODdiOGJiN2Q5MGRlMzljMyIsIm5iZiI6MTczMzQ2MjE3MS44NDE5OTk4LCJzdWIiOiI2NzUyODg5YmFiNmNjM2E0YzhmYzdkMzgiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9EB7BhjTtGLjW0Ob4P0AJCW7sMCxwyfqVV_Ggn3NGXo'
//     }
//   };
  
//   useEffect(()=>{
//     fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,options)
//     .then(res => res.json())
//     .then(res => setApiData(res.results))
//     .catch(err => console.error(err));
//   })
  

  return (
    <div className='titelcards'>
      <h2>{title?title:"Populer on Netflix"}</h2>
      <div className="card-list">
        {cards_data.map((card , index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
       </div>
    </div>
  )
}

// const TitelCards = (title , category) =>{
//   return (
//     <div className="titlecards">
//     <h2>{title?title:"Populer on Netflix"}</h2>
//       <div className="card-list">
//         {cards_data.map((card , index)=>{
//           return <div className="card" key={index}>
//             <img src={card.image} alt="" />
//             <p>{card.name}</p>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }


export default TitelCards