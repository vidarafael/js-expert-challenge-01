class PokemonApi {
  #BASE_URL='https://pokeapi.co/api/v2'

  async getAll(offset = 0, limit = 3) {
    const response = await fetch(`${this.#BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
    const pokemons = await response.json()

    return pokemons
  }

  async find(pokemonName) {
    const response = await fetch(`${this.#BASE_URL}/pokemon/${pokemonName}`)
    const pokemon = await response.json()

    return pokemon
  }
}

export { PokemonApi }