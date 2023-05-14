import express, { Express } from 'express';

const server: Express = express();

server.use(express.static('public', {
    extensions: [ 'html', 'htm' ],
}));

server.listen('8080', (): void => {
    console.log('stock server actived');
});