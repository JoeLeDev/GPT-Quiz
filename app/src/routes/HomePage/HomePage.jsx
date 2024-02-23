import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import { useNavigate } from "react-router-dom";
import "./homePage.css";

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
    <div className="container-home">
      <Title text={"GPT QUIZ"} />
      <div className="button-container">
        <Button
          className="button-home"
          label="HTML"
          onClick={() => navigate("/quizz-html")}
        />
        <Button
          className="button-home"
          label="CSS"
          onClick={() => navigate("/quizz-css")}
        />
        <Button
          className="button-home"
          label="JAVASCRIPT"
          onClick={() => navigate("/quizz-js")}
        />
        <Button
          className="button-home"
          label="REACT"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default HomePage;
