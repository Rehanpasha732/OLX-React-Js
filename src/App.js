import Olx from "./component/olx"
import Signup from './component/signup'
import Login from './component/Login'

import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}/>
          <Route path="/Login" element={<Login />}/>
            <Route path="/Olx" element={<Olx />} />
         
      </Routes>


    </>


  );
}

export default App;
