export class ErrorDontHasThreePokemons extends Error {
  message;
  status;

  constructor() {
    const message = 'Dont has three pokemons'
    const status = 400
    super(message, status)

    this.message = message
    this.status = status
  }
}