import { PokemonApi } from "../api/index.js"

class TeamRepository {
  #pokemon_api
  constructor() {
    this.#pokemon_api = new PokemonApi()
  }

  async getThreeRandomPokemons(offset = 0) {
    const data = await this.#pokemon_api.getAll(offset)
    const formatData = data.results
    return formatData
  }

  #formatPokemonWithMovie(pokemonName = '', moves = []) {
    const formatPokemonWithMovie = { name: pokemonName, moves: moves.map(movie => {
      const movieName = movie['move'].name || ''

      return movieName
    })}

    return formatPokemonWithMovie
  }

  async findPokemon(pokemonName = '') {
    const data = await this.#pokemon_api.find(pokemonName)
    if (!data) {
      return
    }

    const formatPokemonData = this.#formatPokemonWithMovie(pokemonName, data.moves.slice(0, 5))

    return formatPokemonData
  }

  async getThreeRandomPokemonsWithMoves() {
    const MAX_OFFSET = 100
    const randomOffset = Math.ceil(Math.random() * MAX_OFFSET)
    
    const threeRandomPokemons = await this.getThreeRandomPokemons(randomOffset)
    const promisesFindPokemon = []

    for (const pokemon of threeRandomPokemons) {
      promisesFindPokemon.push(this.findPokemon(pokemon.name))
    }

    const pokemons = await Promise.all(promisesFindPokemon)

    return pokemons
  }
}

export { TeamRepository }