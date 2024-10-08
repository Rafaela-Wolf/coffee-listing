import { useState } from 'react'
import CoffeeList from './components/coffee-list/coffee-list'
import { createGlobalStyle } from 'styled-components';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <CoffeeList />
    </>

  )
}

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

  * {
    font-family: 'DM Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }
`;

export default App;