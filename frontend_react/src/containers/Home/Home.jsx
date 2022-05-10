import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoS from '../../assets/logoS.svg';
import './Home.scss';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';


const Home = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  const [ svgClass, setSvgClass ] = useState('');
  const nameArray = [ "a", "m", "m" ];
  const jobArray = [ "s", "o", "f", "t", "w", "a", "r", "e", " ", "e", "n", "g", "i", "n", "e", "e", "r", "." ];

  // Animate (rubberBand) the Home page letters on hover 
  useEffect(() => 
  {
    // Do this after 4s 
    setTimeout(() => 
    {
      setLetterClass('text-animate-hover')
      setSvgClass('text-animate-hover')
    }, 4000);
  }, [])

  return (
    <div className="container home-page">
      <div className="main-text">
        <h1 className="text-blue-100 text-[50px] m-0">

          {/* Animate (fadeIn) the following letters  */}
          <span className={ letterClass }> H </span> 
          <span className={ `${letterClass} _11` }> i </span> 
          <span className={ `${letterClass} _12` }> , </span> 
          
          <br /> 
          <span className={ `${letterClass} _13` }> I' </span>
          <span className={ `${letterClass} _14` }> m </span>
          
          {/* Logo "S" svg  */}
          <svg width="128px" height="128px" viewBox="0 0 16 16">
            <path className={ svgClass } fill="none" stroke="#030bfc" strokeWidth="2" d="
              m 3 10
              c 0 4 8 4 8 0
              q 0 -2 -4 -3
              q -4 -1 -4 -3
              c 0 -4 8 -4 8 0
              "></path>
          </svg>
          
          {/* Animate (fadeIn) nameArray elements  */}
          <AnimatedLetters letterClass={ letterClass } strArray={ nameArray } idx={ 15 } />
        </h1>
          {/* <br /> */}
        <h1 className="text-blue-100 text-[35px] m-0 ">
          {/* Animate (fadeIn) jobArray elements */}
          <AnimatedLetters letterClass={ letterClass } strArray={ jobArray } idx={ 18 } />

        </h1>
        <h2 className="text-blue-400 mt-[20px] text-sm">
          Blockchain Engineer / Fullstack Developer / Tech Writer
        </h2>
        <Link to="/contact" className="flat-button text-[13px] py-2.5 px-5 mt-5 text-blue-400 ">Contact Me</Link>
      </div>
    </div>
  )
}

export default Home;