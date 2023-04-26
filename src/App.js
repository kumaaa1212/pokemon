import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './component/card/Card';
import { Navbar } from './component/Navbar/Navbar';
import { getAllPokemon, getPokemon } from './utils/pokenmon';
function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon';
  const [loading,setloading] = useState(true);
  const [pokemonDate,setpokemondate] =useState([])
  const [nextURL,setnextURL] =useState('')
  const [prevURL,setprevURL] =useState('')
  useEffect(() =>{
    const fetchPokemonDate = async() =>{
       let res = await getAllPokemon(initialURL);
      console.log(res)
      loadPokemon(res.results);
      setnextURL(res.next)
      setprevURL(res.previous)
       setloading(false);
    }
    fetchPokemonDate();
  },[])
const loadPokemon = async(data) =>{
let _pokemonDate =await Promise.all(data.map((pokemon) =>{
  let pokemonRecord = getPokemon(pokemon.url);
  return pokemonRecord;
}));
setpokemondate(_pokemonDate);
}
const handleNext = async() =>{
setloading(true);
let date = await getAllPokemon(nextURL);
await loadPokemon(date.results);
setnextURL(date.next);
setprevURL(date.previous);
setloading(false)
}
const handlePrev =async () =>{
if(!prevURL)return;
setloading(true);
let date = await getAllPokemon(prevURL);
await loadPokemon(date.results)
setnextURL(date.next);
setprevURL(date.previous);
setloading(false);
}

  return (
    <>
    <Navbar/>
    <div className="App">
      {loading ? (<h1>ロード中</h1>):
    ( <>
    <div className="pokemonCardContainer">
      {pokemonDate.map((pokemon,i) =>{
        return<Card key={i} pokemon={pokemon}/>
      })}
    </div>
    <div className="btn">
      <button onClick={handlePrev}>前</button>
      <button onClick={handleNext}>後</button>
    </div>
      </> )} 
    </div>
      </>
  );
}

export default App;