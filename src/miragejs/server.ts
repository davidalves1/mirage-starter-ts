import { Server } from 'miragejs';
import routes from './routes';
import models from './models';
import fixtures from './fixtures';

type ServerEnvironment = 'development' | 'test'

type ServerConfig = {
  environment: ServerEnvironment;
  routes: () => void;
  models: any,
  fixtures: any,
}

const makeConfig = (environment: ServerEnvironment): ServerConfig => {
  return {
    environment,
    routes,
    models,
    fixtures,
  };
}

export function makeServer(env: ServerEnvironment): Server {
  return new Server(makeConfig(env));
}
