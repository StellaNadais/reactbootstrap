import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import pages from "./data/site";
import CustomNavBar from "./CustomNavBar";
import FruitCounter from "./FruitCounter";
import { Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(pages [0]);
  useEffect (( )=>{
    const handleHash = ()=> {
      //get the current hash from the url
      const hash =window.location.hash
    
      //find the page from the pages array where page.href = hash url
      const pageIndex = pages.findIndex(page => page.href == hash)
      console.log (pageIndex)
      //const newPage
      setCurrentPage (pages[pageIndex])
    }
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  },[])
  
  return (
    <>
      <CustomNavBar navItems={pages}/>
      <Container>
        <h1>{currentPage.title}</h1>
        <p>{currentPage.content}</p>
      </Container>

      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
