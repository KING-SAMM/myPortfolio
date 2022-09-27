import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { RiReactjsLine, RiHtml5Fill, RiCss3Fill } from "react-icons/ri";
import { FaSass, FaPhp, FaEthereum, FaNodeJs } from "react-icons/fa";
import { SiSolidity, SiJavascript, SiMongodb, SiTypescript, SiTailwindcss, SiGraphql } from "react-icons/si";
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
      // setSvgClass('text-animate-hover')
    }, 3000);
  }, [])

  return (
    <div id='skills' className='container skills-page mb-[200px]'>
      <div className='central-wrapper'>
        <div className='main-text'>
          <h1>
            <AnimatedLetters
              letterClass={ letterClass }
              strArray={[ "M", "y", " ", "s", "k", "i", "l", "l", "s" ]}  
              idx={ 15 } 
            />
          </h1>

          <div className="skills-list">
              <div className="solidity">
                <SiSolidity className="text-gray-500" />
                <span>Solidity</span>
              </div>
              <div className="react">
                <RiReactjsLine className="text-[#5ED4F4] animate__animated animate" />
                <span>React</span>
              </div>
              <div className="typescript">
                <SiTypescript className="text-blue-800" />
                <span>Typescript</span>
              </div>
              <div className="javascript">
                <SiJavascript className="text-yellow-500" />
                <span>Javascript</span>
              </div>
              <div className="node">
                <FaNodeJs className="text-green-500" />
                <span>Node</span>
              </div>
              <div className="html5">
                <RiHtml5Fill className="text-[#F06529]" />
                <span>HTML 5</span>
              </div>
              <div className="css3">
                <RiCss3Fill className="text-[#28A4D9]" />
                <span>CSS 3</span>
              </div>
              <div className="sass">
                <FaSass className="text-red-600" />
                <span>Sass</span>
              </div>
              <div className="tailwind">
                <SiTailwindcss className="text-blue-500" />
                <span>Tailwind</span>
              </div>
              <div className="graphql">
                <SiGraphql className="text-red-500" />
                <span>GraphQL</span>
              </div>
              <div className="mongodb">
                <SiMongodb className="text-green-700" />
                <span>MongoDB</span>
              </div>
              <div className="php">
                <FaPhp className="text-blue-500" />
                <span>PHP</span>
              </div>
          </div>
        </div>

        <div className="cube-container">
          <div className="cubespinner">
            <div className="face1">
              <FaEthereum className="text-cyan-400" />
            </div>
            <div className="face2">
              <FaSass className="text-red-600" />
            </div>
            <div className="face3">
              <SiSolidity className="text-gray-500" />
            </div>
            <div className="face4">
              <FaNodeJs className="text-green-500" />
            </div>
            <div className="face5">
              <SiTypescript className="text-yellow-500" />
            </div>
            <div className="face6">
              <RiReactjsLine className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;