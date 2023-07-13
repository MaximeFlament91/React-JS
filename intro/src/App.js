// import logo from './logo.svg';
import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Intro from './components/00-intro/index'; 
import Counter from './components/01-state/state';
import Price from './components/01-state/useEffect';
import Counter2 from './components/02-counter/index';
import Parent from './components/03-props/parent';
import Formulaire from './components/04-form/index';
import Todo from './components/05-todoList';
import Header from './components/06-nav-link-routeur/header';
import Article from './components/06-nav-link-routeur/article';


function App() {
  return (
//     <div className="App">
//       </>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>

// <div className="App">
//   <Todo />
// </div>

<Routes>
  <Route path='/' element={<Header/>}>
    <Route path='/Intro' element={<Intro/>} />
    <Route path='/Counter' element={<Counter/>} />
    <Route path='/Price' element={<Price/>} />
    <Route path='/Counter2' element={<Counter2/>} />
    <Route path='/Parent' element={<Parent/>} />
    <Route path='/Formulaire' element={<Formulaire/>} />
    <Route path='/todoList' element={<Todo/>} />
    <Route path='/todoList' element={<Todo/>} />
    <Route path='/article/:id' element={<Article/>} />
  </Route>
</Routes>

  );
}

export default App;
