import { Link } from 'react-router-dom';

const HomePage = () => {
 
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Welcome to Traveller's Home</h1>
        <p className="text-lg text-gray-600">Explore the world as a Traveller, Admin, or Companion!</p>
        <Link
          to='/Login'
          className="bg-blue-600 text-white p-3 mt-6 rounded-lg w-auto hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    );
  };
  
  export default HomePage;
  