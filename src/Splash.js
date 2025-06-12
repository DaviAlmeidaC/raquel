import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // tempo em ms para manter a splash antes de ir pra Home
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000); // 3000ms = 3s

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img
        src="/splash-icon.png"
        alt="Logo"
        className="splash-logo"
      />
    </div>
  );
}
