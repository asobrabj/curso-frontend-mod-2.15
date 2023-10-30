import React, { useEffect, useState } from 'react'
import { PokemonCard } from './Components/PokemonCard'
import axios from 'axios'
import './CSS/style.css'

const IndexPage = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [createPokemon, setCreatePokemon] = useState(false)
  const [updateList, setUpdateList] = useState(0)

  // useEffect(() => {
  //   const request = async () => {
  //     const { data } = await axios.get('http://localhost:3000/')
  //     setPokemonList(data)
  //   }
  //   setTimeout(request, 1500)
  // }, [updateList])

  return (
    <main>
      <h1>Coleção pessoal de POKÉMONS</h1>
      <button onClick={() => setCreatePokemon(true)}>
        Adicionar Pokémon à sua coleção
      </button>
      {createPokemon && (
        <div className="create-card">
          <PokemonCard
            createPokemon={createPokemon}
            setCreatePokemon={setCreatePokemon}
            updateList={pokemonList}
            setUpdateList={setPokemonList}
          />
        </div>
      )}
      <div className="pokemon-container">
        {pokemonList.map(({id, name, imageUrl, evolution }) => (
          <PokemonCard
            key={id}
            id={id}
            name={name}
            image={imageUrl}
            evolution={evolution}
            updateList={pokemonList}
            setUpdateList={setPokemonList}
          />
        ))}
      </div>
    </main>
  )
}

export default IndexPage
