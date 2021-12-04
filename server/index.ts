import app from './app';
import config from './utils/config';
import { createServer, Server } from 'http';

const server: Server = createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running at port: ${config.PORT}`);
});
