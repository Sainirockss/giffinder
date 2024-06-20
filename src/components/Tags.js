import React, { useEffect } from 'react';
import  { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import UseGif from '../Hooks/UseGif';





const Tags = () => {
        // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
        // const[gif,Setgif] = useState('');
        // const[loading,Setloading] = useState(false);
        const[tag,SetTag] = useState('');
       
        // async function fetchdata(){
        //     Setloading(true);
        //     const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        //     const output = await axios.get(url);
        //     console.log(output);
        //     const data = output.data;
        //     const gif = data.data.images.downsized_large.url;
        //     console.log(gif);
        //     Setgif(gif);
        //     Setloading(false);
        // }
    
        // useEffect(()=>{
        //     fetchdata();
        // },[])  
        const{gif,loading,fetchdata} = UseGif(tag);
        function clickhandler(){
            fetchdata();    
        }

        function inputhandler(event){
            SetTag(event.target.value);
        }

    return (
        
          <div className='w-1/2 h-auto bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]  '>
            <h1 className='text-2xl underline uppercase font-bold'>A Random {tag} Gif</h1>
            {loading ? (<Spinner/>):( <img src={gif} width={450} alt='/'/>)};

            <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={inputhandler} value={tag} ></input>

            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg  ' onClick={clickhandler} >Generate</button>
        </div>
       
    
    );
}

export default Tags;
