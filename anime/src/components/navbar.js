import {Link,useParams} from 'react-router-dom';
const Navbar = () =>{
  return(
    <ul className='navbar'>
      <li className='item1'><Link to='/'>CalikoAnime</Link></li>
      <li className='item2'><Link to='/'>Home</Link></li>
      <li className='item3'><Link to='/about'>About</Link></li>
    </ul>
  );
}

export default Navbar;
