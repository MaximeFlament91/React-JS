// import logo from './logo.svg';
import {Routes} from 'react-router-dom';
import './App.css';
import Intro from './components/00-intro/index'; 
import Counter from './components/01-state/state';
import Price from './components/01-state/useEffect';
import Counter2 from './components/02-counter/index';
import Parent from './components/03-props/parent';
import Formulaire from './components/04-form/index';
import Todo from './components/05-todoList';



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
  <Route path='/todoList' element={<Todo/>} />
</Routes>

  );
}

export default App;
