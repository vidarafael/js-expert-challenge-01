import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'

import { TeamRepository } from '../../src/repository/teamRepository.js'
import getThreeRandomPokemonsMock from '../mocks/get-three-random-pokemons.json' assert { type: "json" };
import findPokemonMock from '../mocks/find-pokemon.json' assert { type: "json" };

describe('TeamRepository tests unitary', () => {
  let teamRepository;
  let sinonStubGetThreeRandomPokemons;
  let sinonStubFindPokemon;

  beforeEach(() => {
    teamRepository = new TeamRepository()
    sinonStubGetThreeRandomPokemons = sinon.createSandbox().stub(teamRepository, teamRepository.getThreeRandomPokemons.name);
    sinonStubFindPokemon = sinon.createSandbox().stub(teamRepository, teamRepository.findPokemon.name);
  
    sinonStubGetThreeRandomPokemons.returns(getThreeRandomPokemonsMock)
    const [sandslashPokemon, nidoranFPokemon, nidorinaPokemon] = findPokemonMock

    sinonStubFindPokemon.onCall(0).returns(sandslashPokemon)
    sinonStubFindPokemon.onCall(1).returns(nidoranFPokemon)
    sinonStubFindPokemon.onCall(2).returns(nidorinaPokemon)
  })


  afterEach(() => {
    sinonStubGetThreeRandomPokemons.restore()
    sinonStubFindPokemon.restore()
  })


  it('getThreeRandomsPokemons Should be able returns three pokemons random with movies', async () => {
    const data = await teamRepository.getThreeRandomPokemonsWithMoves()
    const { args } = sinonStubFindPokemon.getCall(0)

    
    expect(args[0]).to.be.eq('sandslash')
    expect(data.length).to.eq(3)
    expect(data[0]).to.have.keys([ 'name', 'moves' ])
  })
})