import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const server = express();

server.use(express.static('public', {
    extensions: [ 'html', 'htm' ],
}));

server.listen(process.env.PORT || 8080, () => {
    console.log('stock server actived');
});