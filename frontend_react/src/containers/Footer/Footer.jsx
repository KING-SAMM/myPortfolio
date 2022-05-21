import { Social, Copyright } from '../../components';
import './footer.scss';

const Footer = () => {
  return (
    <div className='container footer-section'>
      <Social socialClass="social__mobile" />
      <Copyright copyClass="copy__mobile" />
    </div>
  )
}

export default Footer