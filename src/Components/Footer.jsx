import React, { useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { useGlobalContext } from '../Context/GlobalContextProvider'

const Footer = () => {
    const { handleChangeLenguage, handleChangeTheme, isLight, isEsp } = useGlobalContext()
    const [showCopiedMessage, setShowCopiedMessage] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setShowCopiedMessage(true);

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            setShowCopiedMessage(false);
        }, 3000);
    };

    const copyMessage = isEsp ? `Número copiado en el portapapeles!` : `Number copied to clipboard!`;

    return (
        <footer>
            <div className='socialMedia'>
                <BiLogoGmail />
            </div>
            <div className='socialMedia' onClick={() => copyToClipboard("+5491156543735")}>
                <BsWhatsapp />
            </div>
            {showCopiedMessage && (
                <div className="copiedMessage">
                    {copyMessage}
                </div>
            )}
            <a target='_blank' href="https://github.com/francobulacio">
                <div className='socialMedia' color='#fff'>
                    <AiOutlineGithub />
                </div>
            </a>
            <a href="https://www.linkedin.com/in/franco-bulacio/" target="_blank" rel="noopener noreferrer">
                <div className='socialMedia'>
                    <AiFillLinkedin color='white' />
                </div>
            </a>
        </footer>
    );
};

export default Footer;