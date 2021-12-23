import {useEffect} from 'react';
import {useFetch} from './useFetch';
import AnimeBlock from './AnimeBlock';
import Navbar from './navbar';

const MiddleDataFile = () => {
  // variables
  const url = 'https://raw.githubusercontent.com/Afsalon/anime-json/main/js/anime.json';
  const {data,isloading} = useFetch(url);

  // returns
  if (isloading){
    return(
      <>
      <div className='main'>
        <h1 className='load'>Loading..</h1>
      </div>
      </>
    )
  }
  return(
    <>
      <div className='main'>
        <Navbar/>
        {data.map((anime)=>{
              return <AnimeBlock key={anime.id} {...anime}/>
            })}
      </div>
    </>
  );
}

export default MiddleDataFile;
