import http from 'node:http'
import { TeamService } from './service/teamService.js';
import { TeamRepository } from './repository/teamRepository.js';

const routes = {
  'GET:/team': async (_, res) => {
    const teamRepository = new TeamRepository()
    const teamService = new TeamService({ repository: teamRepository })
    try {
      const data = await teamService.execute()
  
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(200)
      return res.end(JSON.stringify({ data }))

    } catch (error) {
      res.writeHead(error.status || 500)
      return res.end(JSON.stringify({ data: error.message || 'Error' }))
    }
  },
  default(_, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(404)
    return res.end(JSON.stringify({ data: 'This route not exists, access /team' }))
  }
}

function handlerRequests(request, response) {
  const { url, method } = request
  const formatUrl = `${method}:${url}`
  const routeKey = routes[formatUrl] || routes.default
  return routeKey(request, response)
}

const app = http.createServer(handlerRequests)

export { app }