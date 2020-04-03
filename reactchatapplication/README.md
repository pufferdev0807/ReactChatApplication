# General Specifications

## Project Members

- Klifford Agujar 101145584
- Kevin Hy 101078240
- Igor Teixeira Belem 100907699

## Admin Credentials

admin/admin

## Frontend

- [ ] Base frontend chat app W/ Socket.io
- [x] React-Material for UI
- [ ] Guest
  - [x] Chat Screen
  - [ ] Admin Login Screen [JWT, or PASSPORT.JS]
- [ ] Admin
  - [ ] Event History : Event Type(CONNECTED, JOINED, ERROR), Date, Time, User, EventID, PPID
  - [ ] Chat History(Pagination, Sorting, Filter) : MessageID, Date, Time, MessageSender, MessageReceiver, Message, Room
  - [ ] Rooms(Pagination, Sorting, Filter) : RoomID, Room Name, Created Date, Edit Date, Status, Add New Room
  - [ ] Add/Edit Room Screen(Basic validation, no nameless room) : RoomName, Status(Active, Inactive)

## Backend

- [ ] Base backend
  - [ ] Socket.io
  - [x] Database API
- [x] Database - MongoDB Remote
- [ ] Admin User table
- [ ] Event History : Event Type(CONNECTED, JOINED, ERROR), Date, Time, User, EventID, PPID
- [ ] Chat History : MessageID, Date, Time, Sender, Receiver, Message, Room
- [ ] Rooms : RoomID, Room Name, Created Date, Edit Date, Status

## API targets

`htttp://localhost:${port}/api/event-history`
`htttp://localhost:${port}/api/chat-history`
`htttp://localhost:${port}/api/rooms`

## Technologies

Moment.js
