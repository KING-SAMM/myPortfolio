import './About.scss';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';


const About = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
 
  // Animate (rubberBand) the Home page letters on hover 
  useEffect(() => 
  {
    // Do this after 4s 
    setTimeout(() => 
    {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])

  return (
    <div id='about' className='container about-page'>
      <div className='main-text'>
        <h1>
          <AnimatedLetters
            letterClass={ letterClass }
            strArray={[ "A", "b", "o", "u", "t", " ", "m", "e" ]}  
            idx={ 15 } 
          />
        </h1>
        <p>
          I am a full stack developer and Web Development instructor. I have worked with Javascript-baswd technologies like Vue and React; and also Laravel and graphQL.
        </p>
        <p>
          Recently, I made a foray into blockchain development, particularly ethereum, and I am enjoying every bit of it.
        </p>
      </div>
      <div className="image">
        <img src="../../assets/logo01.png" alt="Glowing sircle background" />
        <img src="../.../assets/kc-samm5.png" alt="KC Samm" />
      </div>
    </div>
  )
}

export default About;