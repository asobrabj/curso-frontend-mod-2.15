import axios from 'axios'
import React, { useState } from 'react'

export const PokemonCard = ({
  id,
  name,
  image,
  evolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList
}) => {
  const [editPokemon, setEditPokemon] = useState(createPokemon ?? false)
  const [nameInput, setNameInput] = useState(name ?? '')
  const [imageUrlInput, setImageUrlInput] = useState(image ?? '')
  const [evolutionInput, setEvolutionInput] = useState(
    evolution?.toString() ?? ''
  )

  const handleChangePokemon = () => {
    if (createPokemon) {
      // axios.post('http://localhost:3000/new-pokemon', {
      //   name: nameInput,
      //   imageUrl: imageUrlInput,
      //   evolution: Number(evolutionInput)
      // })
      setCreatePokemon(false)
    } else {
      // axios.put(`http://localhost:3000/update-pokemon/${id}`, {
      //   name: nameInput,
      //   imageUrl: imageUrlInput,
      //   evolution: Number(evolutionInput)
      // })
      setEditPokemon(false)
    }
    setUpdateList(updateList + 1)
  }

  const handleDeletePokemon = () => {
    setUpdateList(updateList.filter((pokemon) => pokemon.id !== id));
  }

  return (
    <div className="pokemon-card">
      {editPokemon ? (
        <div>
          <label>
            Nome:
            <input
              type="text"
              onChange={e => setNameInput(e.target.value)}
              value={nameInput}
            />
          </label>
          <label>
            Url da imagem:
            <input
              type="text"
              onChange={e => setImageUrlInput(e.target.value)}
              value={imageUrlInput}
            />
          </label>
          <label>
            Estágio de evolução:
            <input
              type="number"
              onChange={e => setEvolutionInput(e.target.value)}
              value={evolutionInput}
            />
          </label>
          <button
            onClick={() => {
              createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
            }}
          >
            Cancela
          </button>
          <button onClick={() => {
            handleChangePokemon();
            const updatedList = [
              ...updateList,
              {
                id: updateList.length,
                name: nameInput,
                imageUrl: imageUrlInput,
                evolution: Number(evolutionInput)
              }
            ];
            console.log(updatedList);
            setUpdateList(updatedList);
          }}>Confirma</button>
        </div>
      ) : (
        <>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <h3>Estágio de evolução: {evolution}</h3>
          <button onClick={() => setEditPokemon(true)}>Alterar</button>
          <button onClick={() => handleDeletePokemon()}>Remover</button>
        </>
      )}
    </div>
  )
}
