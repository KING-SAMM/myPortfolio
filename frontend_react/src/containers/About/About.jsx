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
      setSvgClass('text-animate-hover')
    }, 3000);
  }, [])

  return (
    <div className='container about-page'>
      <div className='main-text'>
        <h1>
          <AnimatedLetters
            letterClass={ letterClass }
            strArray={[ "A", "b", "o", "u", "t", " ", "m", "e" ]}  
            idx={ 15 } 
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim nulla laborum optio nihil ducimus! Commodi laudantium sed quisquam enim facere porro laborum quia, fugiat nemo officia sunt a voluptate ipsum.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero minus assumenda amet velit expedita accusamus.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus minima ipsam nemo ad dolorum, rerum vero ea repellendus ullam nostrum?
        </p>
      </div>
    </div>
  )
}

export default About;