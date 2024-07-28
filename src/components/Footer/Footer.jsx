import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='baseline'>
      © 2024 Ink Empire. Todos los derechos reservados.
      <div className="social-icons">
      <a href="#"><img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Whatsapp" /></a><a href="#"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" /></a> 
        <a href="#"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook" /></a>
        <a href="#"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
        <a href="#"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X" /></a>
      </div>
    </div>
  );
}

