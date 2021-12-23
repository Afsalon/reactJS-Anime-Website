import Navbar from './navbar';

const About = () =>{
  return(
    <>
      <Navbar/>
      <div className='main'>
        <div className='AboutInfo'>
          <h1 className='Welcome'>Welcome to CalikoAnime!</h1>
          <p className='details'> We use ReactJS, Django and other latest tools to serve you high quality, fast streaming Anime</p>
          <h3 className='Enjoy'>Enjoy!</h3>
          <p className='details'>Email us at CalikoAnime@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default About;
