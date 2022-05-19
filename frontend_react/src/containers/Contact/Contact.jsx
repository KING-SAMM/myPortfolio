import './Contact.scss';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import { FlatButton } from '../../components';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  const refForm = useRef();
 
  // Animate (rubberBand) the Home page letters on hover 
  useEffect(() => 
  {
    // Do this after 4s 
    setTimeout(() => 
    {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, []);

  // Send Email
  const handleEmail = (e) => 
  {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_iyzbobp',
        'template_i7rdwv5', 
        refForm.current,
        'rTG4a2fagn6rsBIeK'
      ).then(
        (response) => { 
          alert('Message successfully sent!');
          console.log('SUCCESS!', response.status, response.text)
          window.location.reload(false);
         },

         (error) => {
           alert('Message could not be sent. Please try again!');
           console.log('FAILED...', error);
         }
      )
  }

  return (
    <div id='contact' className='container contact-page'>
      <div className="main-text">
        <h1>
          <AnimatedLetters 
            letterClass={ letterClass }
            strArray={[ "C", "o", "n", "t", "a", "c", "t", " ", "m", "e" ]} 
            idx={ 15 } />
        </h1>
        <p>
          Let's have a little chat. 
        </p>

        <div className="contact-form">
          <form ref={ refForm } onSubmit={ handleEmail }>
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
                <input type="submit" className="flat-button flat-button-mobile text-[13px] py-2.5 px-5 mt-1" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact