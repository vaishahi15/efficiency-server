import 'module-alias/register'; // for production build
import 'tsconfig-paths/register'; // for local development
import app from './app';

import http from 'http';
import debug from 'debug';
const debugNode = debug("node-angular");

import { sequelize } from '../src/util/database.util';
import { socket } from './helpers';


const normalizePort = val => {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof port === "string" ? "pipe " + port : "port " + port;
    debugNode("Listening on " + bind);
};

const port = normalizePort(process.env.PORT);
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

const listenServer = async () => {
    try {
        server.listen(port, '0.0.0.0', () => {
            console.log(`Server listening on port ${port}`);
        });
        const io = socket.init(server);
        io.on('connection', (socket) => {
            console.log('Live connection established');
            socket.on('disconnect', () => {
                console.log('Live connection destroyed');
            });
        });
    } catch (error) {
        console.error('Error starting the server: ', error);
    }
}

(async function() {
    try {
        await listenServer();
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();



