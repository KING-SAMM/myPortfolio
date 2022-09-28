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
    <div id='about' className='container about-page md:w-full'>
      <div className='main-text ml-[5px] md:ml-[-180px] lg:mt-[0px] lg:ml-[10%]'>
        <h1>
          <AnimatedLetters
            letterClass={ letterClass }
            strArray={[ "A", "b", "o", "u", "t", " ", "m", "e" ]}  
            idx={ 15 } 
          />
        </h1>
        <p>
          I am a full stack developer and Web Development instructor. I have worked with Javascript-based technologies like Vue and React; and also Laravel and graphQL.
        </p>
        <p>
          Recently, I made a foray into blockchain development, particularly ethereum, and I am enjoying every bit of it.
        </p>
        <div className="grid">
          <h3 className='work__experience text-2xl'>
            Work Experience
          </h3>
          <h4 className='ccit text-[14px] my-1'>
            CCIT Digital Solutions Ltd, Lagos
          </h4>
          <h5 className='ccit__portfolio italic font-thin text-[12px]'>
            Web Design and Development Instructor
          </h5>
          <p className='year ccit__year text-white'>
           2019 - 2020
          </p> 
           
          <h4 className='goldtech text-[14px] my-1'>
            GoldTech ICT Hub Ltd, Lagos 
          </h4>
          <h5 className='goldtech__portfolio italic font-thin text-[12px]'>
            Web Design and Development Instructor
          </h5>
          <p className='year goldtech__year text-white'>
           2020 - 2022
          </p> 
        </div>
           
      </div>
      <div className="image md:mt-4">
      </div>
    </div>
  )
}

export default About;