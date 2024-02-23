import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();


  localStorage.setItem('hasLeftQuiz', 'true'); 

  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        console.log('Onglet est maintenant visible');
        const hasLeft = localStorage.getItem('hasLeftQuiz');
        if (hasLeft) {
          console.log(`L'utilisateur avait quitté le quiz, redirection vers la page d\'erreur`);
          navigate('/*');
      }
    }
  }
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };

    }, [navigate]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
    </div>
  );
};

export default HomePage;
