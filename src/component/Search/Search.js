import React, { useRef } from 'react'
const Search =  ({SearchPokemon}) => {
  const ref = useRef();
  const handleSerch = async() =>{
    const value = ref.current.value;
    const SerchName = await SearchPokemon();
    const result = SerchName.filter((pokeName) =>{
      pokeName.toLowerCase().includes(value.toLowerCase())
    })
  }

  return (
    <div>
      <input type="text" onChange={handleSerch}/>
      
    </div>
  )
}

export default Search