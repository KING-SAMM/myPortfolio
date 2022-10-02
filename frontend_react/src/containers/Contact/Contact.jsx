import './Contact.scss';
import AnimatedLetters from '../../components/AnimatedLetters/AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import { FlatButton } from '../../components';
import emailjs from '@emailjs/browser';
import { Social } from '../../components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [ letterClass, setLetterClass ] = useState('text-animate');
  const refForm = useRef();

  const position = [6.489898, 3.356642];
 
  // Animate (rubberBand) the Home page letters on hover 
  useEffect(() => 
  {
    // Do this after 3s 
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
      <div className="main-text lg:mt-[50px] lg:ml-[8%]">
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
                <input type="submit" className="submit-button text-[13px] py-2.5 px-5 mt-1" value="Send" />

              </li>
            </ul>
          </form>
        </div>
      </div>

      <div className="info-map bg-gradient-to-r from-black to-[#111111] text-white font-['Helvetica'] font-light p-5 md xs360:mt-12 z-[999999] md:absolute md:mt-[643px] md820:mt-[655px] md912:mt-[673px] md:right-2 lg992:-top-[610px] lg992:left-[61%] lg992:w-[267px] lg992:box-border ">
        Samuel K. Onyegbuna, 
        <br />
        Nigeria, 
        <br />
        81, Bode Thomas Street  <br />
        Surulere, Lagos <br />
        <span className='block text-[#ffd700] text-xl pt-5'>
          kcsamm11@gmail.com
        </span>

      </div>

      <div className="map-wrap bg-gradient-to-r from-sky-500 to-indigo-500 xs360:mt-4 md:mt-8 lg992:h-screen">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; 2022, KC Samm | <a href="https://studioeternal.net">studioeternal</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Why not drop in <br /> Let's chat over tea.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Contact