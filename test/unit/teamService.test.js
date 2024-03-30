import { describe, it, beforeEach } from 'mocha'
import * as chai from 'chai';
import sinon from 'sinon'
import chaiAsPromised from 'chai-as-promised';

import { TeamRepository } from '../../src/repository/teamRepository.js'
import { TeamService } from '../../src/service/teamService.js';

import getThreeRandomPokemonsMock from '../mocks/get-three-random-pokemons.json' assert { type: "json" };
import errorGetThreeRandomPokemonsMock from '../mocks/error-get-three-random-pokemons.json' assert { type: "json" };
import { ErrorDontHasThreePokemons } from '../../src/service/error-dont-has-three-pokemons.js';

chai.use(chaiAsPromised)
var expect = chai.expect;

describe('TeamService tests unitary', () => {
  let teamRepository;
  let teamService;
  let teamRepositoryStub;

  beforeEach(() => {
    teamRepository = new TeamRepository()
    teamService = new TeamService({ repository: teamRepository })
  })

  afterEach(() => {
    teamRepositoryStub.restore()
  })

  it('Should be able returns three pokemons random with movies', async () => {
    teamRepositoryStub = sinon.createSandbox().stub(teamRepository, teamRepository.getThreeRandomPokemonsWithMoves.name).returns(getThreeRandomPokemonsMock)
    const data = await teamService.execute()
    
    expect(data.length).to.be.eq(3)
    expect(data[0]).to.have.keys(['name', 'url'])
  })

  it('Should be able returns Error if does no has three pokemons', async () => {
    teamRepositoryStub = sinon.createSandbox().stub(teamRepository, teamRepository.getThreeRandomPokemonsWithMoves.name).returns(errorGetThreeRandomPokemonsMock)

    await expect(teamService.execute()).to.eventually.be.rejectedWith(ErrorDontHasThreePokemons);
  })
})