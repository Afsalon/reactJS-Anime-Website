import {useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {useFetch} from './useFetch';
import Navbar from './navbar';
import Error from './Error';
const AnimeDetail = () =>{
  const {id} = useParams();
  const url = 'https://raw.githubusercontent.com/Afsalon/anime-json/main/js/anime.json';
  const {data,isloading} = useFetch(url);
  // console.log(id,data,isloading)
  var my_data = []
  if (id < 12){
    my_data = data.find((anime)=>anime.id==id)
  }
  else{
    my_data = data.find((anime)=>anime.id==12)
  }
  if (isloading){
    return(
      <h1 className='load'>Loading</h1>
    )
  }
  return(
    <>
    <div className='main'>
      <Navbar/>

      <div className='DetailBlock'>
        <img className='DetailPic' src={my_data.img} alt={my_data.name}/>
        <div className='DetailInfo'>
          <h3 className='DetailName'>{my_data.name}</h3>
          <h3 className='DetailRating'>Rating {my_data.Rating}</h3>
          <h3 className='DetailEpisode'>Episodes: {my_data.episode}</h3>
          <h3 className='DetailCategorie'>{my_data.categorie}</h3>
          <p className='DetailDescription'>{my_data.description}</p>
          <h3 className='DetailStudio'>{my_data.studio}</h3>
        </div>
      </div>

    </div>
    </>
  )
}
export default AnimeDetail;
