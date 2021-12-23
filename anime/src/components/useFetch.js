import React,{useState,useEffect} from 'react';

export const useFetch = (url) => {
  // variables
  const [data,setData] = useState([]);
  const [isloading,setIsLoading] = useState(true);

  // fetch and set
  const getData = async() => {
    try{
      const response = await fetch(url)
      const anime_list = await response.json()
      setData(anime_list)
      setIsLoading(false)
    }
    catch{
      setIsLoading(true)
    }
  }

  // useEffect
  useEffect(()=>{
    getData()
  },[])
  return {
    data:data,
    isloading: isloading
  }
}
