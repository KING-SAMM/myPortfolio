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
    <div id='about' className='container about-page h-full md:w-full'>
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
        <h3 className='text-2xl'>
          Work Experience
        </h3>
        <h4 className='text-[16px] my-1'>
          CCIT Digital Solutions Ltd, Lagos
        </h4>
        <p className='italic font-thin text-xs'>
          Web Design and Development Instructor
        </p>
         <p className='year text-white'>
           2019 - 2020
         </p> 
           
        <h4 className='text-[16px] my-1'>
          GoldTech ICT Hub Ltd, Lagos 
        </h4>
        <p className='italic font-thin text-xs'>
          Web Design and Development Instructor
        </p>
         <p className='year text-white'>
           2020 - 2022
         </p> 
           
      </div>
      <div className="image">
      </div>
    </div>
  )
}

export default About;