import React from 'react';

import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js'

function App() {
  return (
    <div className="app">
      <Header/>

      {/* App Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        {/* Widgets */}
      </div>
     
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