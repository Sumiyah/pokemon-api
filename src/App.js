import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [Pokemons, setPokemons] = useState([])

  //use effect -> {what to do} [event/varibale when to do it, if left empty = as soon as it loads run the function.. if we gave it var it will run as soon as it's changed, get api call each time the search is called --the aniapi project-- ]
  useEffect(() => { }, [])

  const getPokemons = () => {
    console.log('in get pokemon fx')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
      return response.json();
    }).then(response => {
      console.log(response);
      console.log(response.results);
      setPokemons(response.results)
    })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <div className="row ">
        <div className="bg-dark p-3 col-12 mb-5">
        <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"/>
        </div>
      </div>
        <div className="row justify-content-center">

        <div className="col-sm-4 py-3 px-lg-5">
          <button className="btn btn-dark text-warning" onClick={getPokemons}>Fetch Pokémons!</button>
        </div>

        <div className="col-sm-4 py-3 px-lg-5">
          <ul className="list-group list-group-flush">
            {
              Pokemons.map((pkmn,i) => <li key={i} className="text-primary list-group-item" >{pkmn.name}</li>)
            }
          </ul>
        </div>
        </div>
    </div>
  );
}

export default App;
