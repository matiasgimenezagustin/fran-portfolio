import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import '../style/contactMe.css';
import { useGlobalContext } from '../Context/GlobalContextProvider';

const ContactMe = () => {
  const { isLigth } = useGlobalContext();
  const inputStyle = { backgroundColor: isLigth ? 'rgba(57, 62, 70, 0.50)' : '#E0EBE3' };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className='section'>
      <h2 className='titleSection'>Contáctame</h2>
      <div className='contactMeSection'>
        <div className='imageContactMe'>
          <img src='/idea.png' alt='Idea' />
        </div>
        <form action="https://formspree.io/f/mgegynja" method="POST">
          <div className='inputsContainer'>
            <div className='inputContainer'>
              <label>Tu nombre</label>
              <input
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Nombre completo'
                style={inputStyle}
              />
            </div>
            <div className='inputContainer'>
              <label>Tu correo electrónico</label>
              <input
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Correo electrónico'
                style={inputStyle}
              />
            </div>
          </div>
          <div>
            <label>Tu mensaje</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Mensaje'
              className='inputContainer'
              style={inputStyle}
            />
          </div>
          <div>
            <button type='submit' className='btn-send'>
              Enviar mensaje <FiSend />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
