# Uber Clone

A full-stack Uber clone application built with React, Node.js, Express, MongoDB and Socket.IO. Features real-time ride tracking, user/driver authentication, and Google Maps integration.

## Features

- User and Captain (Driver) authentication
- Real-time location tracking
- Ride booking system
- Fare calculation
- OTP verification for ride start
- Multiple vehicle types (Car, Auto, Moto)
- Interactive maps with Google Maps API
- Real-time notifications using Socket.IO
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Socket.IO Client
- Google Maps React
- Tailwind CSS
- GSAP for animations
- Axios for API calls
- Vite as build tool

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO
- JWT Authentication
- Google Maps API
- bcrypt for password hashing

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/uber-clone.git
cd uber-clone
```

2. Install dependencies:

```bash
# Backend dependencies
cd Backend
npm install

# Frontend dependencies
cd ../Frontend
npm install
```

3. Environment Setup:

Backend `.env`:

```env
PORT=3000
DB_CONNECT=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API=your_google_maps_api_key
```

Frontend `.env`:

```env
VITE_BASE_URL=http://localhost:3000
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

4. Start Development Servers:

Backend:

```bash
cd Backend
npm start
```

Frontend:

```bash
cd Frontend
npm run dev
```

## Project Structure

### Frontend

```
Frontend/
├── src/
│   ├── components/    # Reusable UI components
│   ├── context/      # React context providers
│   ├── pages/        # Route components
│   └── main.jsx      # Entry point
```

### Backend

```
Backend/
├── controllers/      # Request handlers
├── models/          # MongoDB schemas
├── routes/          # API routes
├── services/        # Business logic
├── middlewares/     # Custom middlewares
└── socket.js        # Socket.IO configuration
```

## Features in Detail

### User Features

- User registration and login
- Book rides
- Real-time ride tracking
- Multiple vehicle type selection
- Fare estimation
- OTP verification
- Ride history

### Captain (Driver) Features

- Captain registration and login
- Accept/reject rides
- Real-time location sharing
- OTP verification
- Ride completion
- Earnings tracking

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Google Maps API](https://developers.google.com/maps)
- [Socket.IO](https://socket.io/)
-
