import logo from './logo.svg';
import './App.css';
import { getDefaultNormalizer } from '@testing-library/dom';

function App() {
  const title = "Welcome Aishwarya"
  const likes = 50;
  const link = "http://www.google.com"
  // const person ={
  //   name : 'aishwarya',
  //   mail : 'xxxx@gmail.com'
  // }
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <a href={link}>Google Site</a>
        
      </div>
    </div>
  );
}

export default App;
