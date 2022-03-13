import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');

  const url = 'https://pokeapi.co/api/v2/pokemon/1/'

  const fetchPost = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    setName(data.name)
  };

  useEffect(() => {
    fetchPost(url)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {name}
      </header>
    </div>
  );
}

export default App;
