import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);
  
  return Object.keys(user).length > 0 ? (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default App;
