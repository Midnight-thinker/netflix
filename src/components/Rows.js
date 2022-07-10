import axios from '../axios';
import React, { useEffect, useState } from 'react'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url="https://image.tmdb.org/t/p/original/";

function Rows(props) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(props.fetchURL);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData(); 
    },[props.fetchURL]);

    const opts={
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    function handleClick(movie){
      if(trailerUrl){
        setTrailerUrl('');
      }else{
        movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams=new URLSearchParams( new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error))
      }
    }

  return (
    <div className='rows'>
      <h2>{props.title}</h2>
      <div className="rows_posters">
        {movies.map(movie=>(
            <img 
            className={`rows_poster ${props.isLargeRow && "posterLarger" }`}
            key={movie.id}
            onClick={()=>handleClick(movie)}
            src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}></img>
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Rows
