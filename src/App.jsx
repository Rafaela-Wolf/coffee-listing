import { createGlobalStyle } from 'styled-components';
import bgImgBody from './assets/images/bg-cafe.jpg';
import AppRoutes from './routes/routes';

function App() {


  return (
    <>
      <GlobalStyles />
      <AppRoutes/>
    </>

  )
}

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

  * {
    font-family: "DM Sans", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  body {
    background-image: url(${bgImgBody});
    background-repeat: no-repeat;
    background-size: 100vw 40vh;
    background-position: top;
    background-color: #111315;
  }
`;

export default App;