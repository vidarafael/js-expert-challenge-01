import { ErrorDontHasThreePokemons } from "./error-dont-has-three-pokemons.js"

class TeamService {
  constructor({ repository }) {
    this.repository = repository
  }

  async execute() {
    const threeRandomPokemonsWithMoves = await this.repository.getThreeRandomPokemonsWithMoves()

    const dontHasThreePokemons = threeRandomPokemonsWithMoves.length < 3

    if (dontHasThreePokemons) {
      throw new ErrorDontHasThreePokemons()
    }

    return threeRandomPokemonsWithMoves
  }
}

export { TeamService }