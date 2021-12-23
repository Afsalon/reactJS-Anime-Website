import {Link,useParams} from 'react-router-dom';
import '../main.css';

const AnimeBlock = (props) => {
  const {id,name,description,Rating,episode,categorie,studio,img} = props;
  return(
    <Link to={`/detail/${id}`}>
      <div key={id} className='anime_block'>
        <img className='row1' src={img} alt={name}/>
        <div className='row2'>
          <h3 className='name'>{name}</h3>
          <h3 className='episode'>{episode} Episodes</h3>
        </div>
        <h3 className='categorie'>{categorie}</h3>
      </div>
    </Link>
      )
}

export default AnimeBlock;
