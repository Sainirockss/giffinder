import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import UseGif from '../Hooks/UseGif';


const Random = () => {
    // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    // const[gif,Setgif] = useState('');
    // const[loading,Setloading] = useState(false);
   
    // async function fetchdata(){
    //     Setloading(true);
    //     const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
    const{gif,fetchdata,loading} = UseGif();
    function clickhandler(){
        fetchdata();    
    }

    return (
        <div className='w-1/2 h-auto bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]  '>
            <h1 className='text-2xl underline uppercase font-bold'>A Random Gif</h1>
            {loading ? (<Spinner/>):( <img src={gif} width={450}  alt='/'/>)}
            <button className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg  ' onClick={clickhandler} >Generate</button>
        </div>
    );
}

export default Random;
