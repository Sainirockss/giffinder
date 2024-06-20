// import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Spinner from './Spinner';

const UseGif = (tag) => {

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const memeurl = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const[gif,Setgif] = useState('');
    const[loading,Setloading] = useState(false);
    
   
    async function fetchdata(){
        Setloading(true);
        
        const output = await axios.get(tag?(memeurl):(url));
        console.log(output);
        const data = output.data;
        const gif = data.data.images.downsized_large.url;
        console.log(gif);
        Setgif(gif);
        Setloading(false);
    }

    useEffect(()=>{
        fetchdata();
    },[]) 











    return (
      {gif,loading,fetchdata}  
    );
}

export default UseGif;
