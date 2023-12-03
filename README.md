# BizWeb (GT WebDev)
## Introduction:
Meet BizWeb, a solution crafted to address the unique challenges of our traditional business client. In an industry where keeping track of employees, managing sensitive data, and tracking service progress can be a hurdle, BizWeb steps in as the go-to solution. It's designed for simplicity and efficiency, aiming to make daily business tasks easier. Let’s take a look at [Our Design](https://www.figma.com/file/9BnnS857uTXRENUSRkwfyT/BizWeb?type=design&node-id=228%3A35&mode=design&t=WRgSDJnPg34lun0h-1), and boost our workflow together.

## Built with:

- ⚙️ Frontend: [React.js](https://reactjs.org/), [Redux](https://redux.js.org/)
- 🌈 Styling: [Tailwind CSS](https://tailwindcss.com/)
- 🔒 Authentication: [JWT](https://jwt.io/)
- ⚒️ Backend: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- 🍃 Database: [MongoDB](https://www.mongodb.com/), [AWS S3](https://aws.amazon.com/s3/)
- 🔄 Caching: [Redis](https://redis.io/)
- 🎨 Design: [Figma](https://www.figma.com/)

## Features:

- **Project Management Platform:** Easily add, update, and remove projects.
- **Client Management Platform:** Search for existing clients using pages, date of birth, names, and phone numbers.
- **Employee Management Platform (Manager Access Only):** Add, update, and remove employees.
- **Secured Login:** Integration with JSON Web Tokens (JWT) for secure authentication.
- **Generate Financial Reports:** Easily create comprehensive financial reports.
- **Notification System:** Stay updated with a robust notification system.

## Getting Started:

Follow these steps to get your BizWeb platform up and running.

### Prerequisites:

- Node.js and npm (Node Package Manager)
- Redis
- MongoDB

### Installation:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mengzhuou/BizWeb.git
2. **Install Dependencies**
   ```bash
   npm install
3. **Set Up the Backend**
   - Navigate to the backend directory: ```cd backend```
   - Create a .env file and update the following variables:
      - `NODE_ENV` (development/production)
      - `DATABASE_URI` (MongoDB URI)
      - `ACCESS_TOKEN_SECRET` (random strings)
      - `REFRESH_TOKEN_SECRET` (random strings)
      - `SINGLE_USE_TOKEN_SECRET` (random strings)
      - Install Redis
         - Mac Users: ```brew install redis```
         - Windows Users: [Follow this guide](https://github.com/duc-beluga/Redis_Use_Cases)
      - Run Redis ```redis-server```
4. **Run Projects at Root Folder**
   ```bash
   npm start
5. **Access the Application**
   
   Open your browser and visit http://localhost:3000 to access BizWeb.

## Some Screenshots: 
![Login](https://github.com/tuancai99/BizWeb/assets/93027364/127f93a8-ee14-4520-8813-1d32128c1df8)
![Menu](https://github.com/tuancai99/BizWeb/assets/93027364/4907a698-20b6-411e-a987-dff77ee015d7)
![Register New Client](https://github.com/tuancai99/BizWeb/assets/93027364/146ed08e-72e1-49ef-ad7f-aa8cd37fe50a)
![Client Document](https://github.com/tuancai99/BizWeb/assets/93027364/d4b704ac-a189-4075-b69a-e3b238d1c7df)
![Look Up Existing Client](https://github.com/tuancai99/BizWeb/assets/93027364/a831f6f9-6af1-4041-86e1-f308d466e27f)
![Client History](https://github.com/tuancai99/BizWeb/assets/93027364/24988ba1-5b8d-43bf-9a1e-8d13ceef7746)
![Direct Project 7](https://github.com/tuancai99/BizWeb/assets/93027364/53f98df5-0ac5-4e1f-8466-580a2a63b086)
![Project Cart](https://github.com/tuancai99/BizWeb/assets/93027364/64406035-d5f5-4038-bee8-4759d78e8b76)
![Project Info](https://github.com/tuancai99/BizWeb/assets/93027364/89e348a3-111f-45e6-ac18-44ce1feeea10)












