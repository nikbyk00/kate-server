const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const debug = require('debug')('template.backend:server');
const { start } = require('./googleSheets')


const { openConnection, openSync } = require('./database');

/* --------------- V1 routes --------------- */

const auth = require('./routes/auth');


const app = express();

app.use(cors());

app.use(logger('combined'));
app.use(express.json({ limit: process.env.SERVER_CLIENT_MAX_BODY_SIZE }));
app.use(express.urlencoded({ extended: false, limit: process.env.SERVER_CLIENT_MAX_BODY_SIZE }));
app.use(cookieParser())

app.use('/auth', auth);


app.use(logger('combined'));

const port = normalizePort(process.env.SERVER_PORT || '4000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


async function bootstrap() {
    try {
      await openConnection();
      await openSync();  
      await start();
      
      console.info('Connected');
    } catch (err) {
      console.error(err);
    }
  }

bootstrap();

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = app;

