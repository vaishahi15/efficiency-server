import { Server } from "socket.io";

let io;
export const socket = {
    init: httpServer => {
        io = new Server(httpServer);
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket not initialized');
        }
        return io;
    }
};

// export const sendLive = async (event, action, headers, data = {}) => {
//     const userId = headers['x-user-id'];
//     const socketId = headers['x-socket-id'];
//     const user = await UserModel.findById(userId);
//     if (user) {
//         data = { ...data, userId: user._id, userName: user.name, socketId, action }
//     } else {
//         data = { ...data, action }
//     }

//     socket.getIO().emit(event, data);
// }