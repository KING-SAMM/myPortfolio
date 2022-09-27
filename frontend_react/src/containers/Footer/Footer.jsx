import { Social, Copyright } from '../../components';
import './footer.scss';

const Footer = () => {
  return (
    <div id="footer" className='container footer-section'>
      <div className='flex justify-center'>
        <Social socialClass="social__mobile" />
        <Copyright copyClass="copy__mobile" />
      </div>
    </div>
  )
}

export default Footer