import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const Row = ({title, fetchURL, id}) => {
    const [movies, setMovies]= useState([])
   
    useEffect(()=>{
        axios.get(fetchURL).then((Response)=>{
            setMovies(Response.data.results);
        })

    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider'+id);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider'+id);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4 '>{title}</h2>
    <div className='relative flex items-center group'>
        <FaChevronCircleLeft 
        onClick={slideLeft} 
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        <div id={'slider'+id} className='w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ' >
            {movies.map((item, id)=>(
               <Movie key={id} item={item} />
            ))}
        </div>
        <FaChevronCircleRight 
        onClick={slideRight} 
        className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row