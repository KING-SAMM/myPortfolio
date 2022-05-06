import { Link } from 'react-router-dom';
import logoTitle from '../../assets/logo.png';
import './Home.scss';


const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm
          <img src={ logoTitle } alt="description" />
          amm
          <br />
          software engineer
        </h1>
        <h2>Blockchain Engineer / Fullstack Developer / Tech Writer</h2>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
    </div>
  )
}

export default Home;