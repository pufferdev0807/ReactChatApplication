# General Specifications

## Project Members

- Klifford Agujar 101145584
- Kevin Hy 101078240
- Igor Teixeira Belem 100907699

## Admin Credentials

admin/password

## Instructions
Application deployed at:
- [AWS](http://ec2-18-224-228-195.us-east-2.compute.amazonaws.com/)

## Frontend

- [x] Base frontend chat app W/ Socket.io
- [x] React-Material for UI
- [x] Guest
  - [x] Chat Screen
  - [x] Admin Login Screen
- [x] Admin
  - [x] Event History : Event Type(CONNECTED, JOINED, ERROR), Date, Time, User, EventID, PPID
  - [x] Chat History(Pagination, Sorting, Filter) : MessageID, Date, Time, MessageSender, MessageReceiver, Message, Room
  - [x] Rooms(Pagination, Sorting, Filter) : RoomID, Room Name, Created Date, Edit Date, Status, Add New Room
  - [x] Add/Edit Room Screen(Basic validation, no nameless room) : RoomName, Status(Active, Inactive)

## Backend

- [x] Base backend
  - [x] Socket.io
  - [x] Database API
- [x] Database - MongoDB Remote
- [x] Admin User table
- [x] Event History : Event Type(CONNECTED, JOINED, ERROR), Date, Time, User, EventID, PPID
- [x] Chat History : MessageID, Date, Time, Sender, Receiver, Message, Room
- [x] Rooms : RoomID, Room Name, Created Date, Edit Date, Status

## API targets

`htttp://localhost:${port}/api/events`
`htttp://localhost:${port}/api/chatlog`
`htttp://localhost:${port}/api/rooms`

## Technologies

- [react-notification-system](https://github.com/igorprado/react-notification-system)
- [moment.js](https://github.com/moment/moment)
- [Material Design for Bootstrap](https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design)
- [React Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [axios](https://github.com/axios/axios)
- [socket.io](https://github.com/socketio/socket.io)
- [socket.io-client](https://github.com/socketio/socket.io-client)
- [express](https://github.com/expressjs/express)
- [mongoose](https://github.com/Automattic/mongoose)
- [body-parser](https://github.com/expressjs/body-parser)
- [morgan](https://github.com/expressjs/morgan)
- [helmet](https://github.com/helmetjs/helmet)
