import React from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';

function App() {
//   useEffect(()=> {
//     getTodos().then((res)=>{
//       console.log(res)
//     })
// },[]);
  return (
    <div className="App">
      <TodoApp/>
    </div>
  );
}

export default App;
