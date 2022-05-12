import './Contact.scss';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FlatButton } from '../../components';

const Contact = () => {
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
    <div className='container contact-page'>
      <div className="main-text">
        <h1>
          <AnimatedLetters 
            letterClass={ letterClass }
            strArray={[ "C", "o", "n", "t", "a", "c", "t", " ", "m", "e" ]} 
            idx={ 15 } />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>

        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder='Name' required />
                <input type="email" name="email" placeholder='Email' required />
              </li>
              <li>
                <input type="text" name="subject" placeholder='Subject' id="" required />
              </li>
              <li>
                <textarea name="message" placeholder='Message' required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button text-[13px] py-2.5 px-5 mt-1" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact