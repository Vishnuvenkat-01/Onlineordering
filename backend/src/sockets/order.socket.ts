import { Server } from 'socket.io';

export function setupOrderSocket(io: Server) {
  io.on('connection', (socket) => {
    // Customer joins their order room
    socket.on('join_order', (orderId: string) => {
      socket.join(`order:${orderId}`);
      console.log(`Socket ${socket.id} joined room order:${orderId}`);
    });

    // Admin joins the admin room for all order notifications
    socket.on('join_admin', () => {
      socket.join('admin');
      console.log(`Admin socket ${socket.id} joined admin room`);
    });

    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected`);
    });
  });
}
