# Story: Seu primeiro time pokemon

A idéia é testar os fundamentos de `testing`, aplicando o que foi visto no
`JS Expert - Módulo 02` num projeto simples e divertido.

Consumindo a [PokeAPI](https://pokeapi.co/), faça uma API que retorne 3 pokemóns aleatórios para formar seu time inicial numa jornada pokemon.

## Requisitos

### Funcionalidades
1. `GET /`

Deve ser a rota padrão da aplicação ao tentar acessar qualquer rota inexistente (ex.: `/hi`, `/hello`), deve retornar uma mensagem sugerindo acessar a rota `/team`

2. `GET /team`

Deve retornar um array com 3 pokemóns aleatórios, contendo seus respectivos `name` e `moves`, (mostrando apenas um array de strings com os 3 primeiros `moves` presentes na API. ex.: `["mega-punch","fire-punch","thunder-punch"]`).

### Testes

* [X] mocks
* [X] stubs
* [X] spies
* [X] testes end-2-end
* [X] testes unitários
* [X] 100% de code coverage

### Extras

* [X] TDD e BDD, será que rola? Acho que vale a tentativa!
* [X] Que tal consumir a API sem usar libs externas? o módulo `https` do node pode ser bem interessante!
* [ ] Publicar o code coverage no github pages!

## Dicas

* Sinta-se livre pra desenvolver sua solução da melhor maneira possível, a arquitetura recomendada foi pensada para ser um desafio focado em testes e não em arquitetura, teremos um desafio de arquitetura mais pra frente

### Estrutura de pastas esperadas

```
project
│   README.md
│   .nycrc.json
│   package.json
│
└───src
│   │   app.js
|   |
|   |___api
|   |   |   index.js
│   │
│   └───repository
│   │   │   teamRepository.js
│   │
│   └───service
│       │   teamService.js
│
└───test
│   └───e2e
│   │   │   api.test.js
│   │
│   └───mocks
│   │   │   valid-team.json
│   │   │   ...
│   │
│   └───unit
│       │   teamRepository.test.js
│       │   teamService.test.js
│
└───coverage
│   │   ...
```

### Entendendo a PokeAPI

URLs Úteis ao desafio:
- https://pokeapi.co/api/v2/pokemon
- https://pokeapi.co/api/v2/pokemon/7

### Checklist features

- Web API
  * [X] Deve ter uma rota raiz que retorne 404 ou um hello world.
  * [X] Deve ter uma rota de `/team`, onde:
    * [X] Deve consumir a PokeAPI e selecionar 3 pokemóns aleatórios
    * [X] Deve consumir a PokeAPI para obter mais informações sobre os pokemóns escolhidos
    * [X] Deve retornar um objeto JSON contendo um array com 3 pokemóns, cada um com seus respectivos `name` do tipo String e `moves` do tipo Array de String

- Testes
  * [X] Deve ter testes unitários que cubra todas as funções
  * [X] Deve ter testes end-2-end que cubra todas as rotas
  * [X] Deve ter relatório de 100% de code coverage

## Iniciando

1. `package.json` - Troque a versão do node para a sua versão atual (`node -v`) e coloque seu nome no `Author`.

2. `npm i` - Escolha as bibliotecas de testes e instale elas (como as aulas do modulo 1 são com o CommonJS e as bibliotecas `chai`, `mocha`, `sinon` e `nyc`, as configuração de coverage já foi feita pensando nelas).

3. ### Bora codar

## Submissão

1. Inicialize um repósitório git com um arquivo README.md contendo seu nome, quais tópicos do checklist foram implementados e, caso queira, um breve resumo de cada tópico.

2. Crie o projeto e os testes.

3. Coloque as instruções de como configurar e executar seu projeto e os testes no README.md (não se esqueça do coverage com o `nyc`).

4. Envie o link no canal `#desafios-jsexpert` da nossa comunidade no discord.

mocha -> test runner / biblioteca para rodar tests
chai  -> biblioteca para escrever testes mais semanticos, exemplo utilizando: 'expect'
sinon -> biblioteca para utilizar de `stubs` e `spy` nos nossos testes
nyc   -> biblioteca para fazer test coverage