import { Link } from 'react-router-dom';
import logoS from '../../assets/logoS.svg';
import './Home.scss';


const Home = () => {
  const [ letterClass, setLetterClass ] = useState(`text-animate`);
  const nameArray = [ "a", "m", "m" ];
  const jobArray = [ "s", "o", "f", "t", "w", "a", "r", "e", " ", "e", "n", "g", "i", "n", "e", "e", "r" ];

  return (
    <div className="container home-page">
      <div className="main-text">
        <h1 className="text-blue-100 text-[50px] m-0 animate__animated animate__fadeIn animate__delay-2 ">
          Hi, <br /> I'm
          
          <svg width="128px" height="128px" viewBox="0 0 16 16" className='animate__animated animate__rotateIn animate__delay-1.4'>
            <path fill="none" stroke="#030bfc" stroke-width="2" d="
            m 3 10
            c 0 4 8 4 8 0
            q 0 -2 -4 -3
            q -4 -1 -4 -3
            c 0 -4 8 -4 8 0
            "></path>
          </svg>
          
          <AnimatedLetters letterClass={  letterClass} strArray={ nameArray } idx={ 15 } />

          <br />
          
          <AnimatedLetters letterClass={  letterClass} strArray={ jobArray } idx={ 19 } />

        </h1>
        <h2 className="text-blue-400 mt-[20px] text-sm animate__animated animate__fadeInIn animate__delay-1">
          Blockchain Engineer / Fullstack Developer / Tech Writer
        </h2>
        <Link to="/contact" className="flat-button text-[13px] py-2.5 px-5 mt-5 animate__animated animate__fadeIn animate__delay-1.8 text-blue-400 ">Contact Me</Link>
      </div>
    </div>
  )
}

export default Home;