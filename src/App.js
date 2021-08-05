import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header.js';
import Login from './Login';
import Sidebar from './Sidebar.js'

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header/>
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar/>
          <Feed/>
          {/* Widgets */}
        </div>
      )}
     
     
    </div>
  );
}

export default App;

// const firebaseConfig = {
//   apiKey: "AIzaSyCpUq8bsl0VBYDKxTcfN6i4ltQUwYtEOrk",
//   authDomain: "linkedin-clone-1e7e2.firebaseapp.com",
//   projectId: "linkedin-clone-1e7e2",
//   storageBucket: "linkedin-clone-1e7e2.appspot.com",
//   messagingSenderId: "618893599950",
//   appId: "1:618893599950:web:f33072637d09ef219fdc9f"
// };