import { useEffect, useState } from 'react';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import './Projects.scss';
import project1 from '../../assets/localhost_3000_(Nest-Hub).png';
import { FlatButton } from '../../components';

const Projects = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
 
  // Animate (rubberBand) the Home page letters on hover 
  useEffect(() => 
  {
    // Do this after 4s 
    setTimeout(() => 
    {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, []);


  return (
    <div id='projects' className="container projects-page flex flex-col lg:items-center">

      {/* Projects Title  */}
      <div className="main-text flex flex-col lg:ml-[5%] mt-[100px] w-[90%]">
        <h1 className="text-[42px] font-normal mb-[30px] mt-0 lg:ml-[35px] ml-[30px]">
          <AnimatedLetters 
            letterClass={ letterClass }
            strArray={[ "P", "r", "o", "j", "e", "c", "t", "s" ]} 
            idx={ 15 } />
        </h1>
      </div>

      {/* Begin Projects Row  */}
      <div className='flex flex-col lg:flex-row lg:justify-center lg:justify-evenly w-full h-80 lg:px-[5%]'>

        {/* Dapp Project  */}
        <div className='flex flex-col justify-center items-center w-80 h-full mx-auto'>
          <p className='mb-2 mt-0 text-blue-200 text-[20px] font-bold '>Decentralised Application</p>
          <img src={ project1 } alt="Dapp image" width="350" />
          <div className='flex flex-row bg-[#06153F] w-full h-full cursor-pointer'>
            <a 
              href='https://cryptex1.netlify.app'
              className='flex justify-center items-center text-blue-300 text-xl w-1/2 border border-indigo-900 border-r-indigo-800'>
              Visit
            </a>
            <a 
              href='https://github.com/KING-SAMM/CryptEx'
              className='flex justify-center items-center text-blue-300 text-xl w-1/2 border border-indigo-900 border-l-indigo-800'>
              Source
            </a>
          </div>
        </div>

        {/* Prtfolio Website Project  */}
        <div className='flex flex-col justify-center items-center w-80 h-full mx-auto'>
          <p className='mb-2 mt-0 text-blue-200 text-[20px] font-bold '>Portfolio Website</p>
          <img src={ project1 } alt="Portfolio website image" width="350" />
          <div className='flex flex-row bg-[#06153F] w-full h-full cursor-pointer'>
            <a 
              href='#'
              className='flex justify-center items-center text-blue-300 text-xl w-1/2 border border-indigo-900 border-r-indigo-800'>
              Visit
            </a>
            <a 
              href='https://github.com/KING-SAMM/myPortfolio'
              className='flex justify-center items-center text-blue-300 text-xl w-1/2 border border-indigo-900 border-l-indigo-800'>
              Source
            </a>
          </div>
        </div>
      </div> {/* End Projects Row */}
    

    </div>
  )
}

export default Projects