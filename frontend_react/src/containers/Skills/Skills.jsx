import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import './Skills.scss';

const Skills = () => {
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
    <div className='container skills-page'>
      <div className='main-text'>
        <h1>
            <AnimatedLetters
              letterClass={ letterClass }
              strArray={[ "M", "y", " ", "s", "k", "i", "l", "l", "s" ]}  
              idx={ 15 } 
            />
          </h1>
      </div>
    </div>
  )
}

export default Skills;