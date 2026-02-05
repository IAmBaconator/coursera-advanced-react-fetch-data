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
        <h1>Customer data</h1>
        <h2>Name: {user.results[0].name.first} {user.results[0].name.last}</h2>
        <img
          src={user.results[0].picture.large}
          title={user.results[0].name.first} {...user.results[0].name.last}
        />
      </header>
    </div>
  ) : (
     <div className="App">
      <header className="App-header">
        <h1>Data pending...</h1>
      </header>
    </div>
  );
}

export default App;
