import socketIo from 'socket.io';

let io;
export const socket = {
    init: httpServer => {
        io = socketIo(httpServer);
        return io
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized')
        }
        return io;
    }
}