import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { generateProfilePicture } from '../utils/utils';
import OrderHistory from '../order/order';
import { Link } from 'react-router-dom';
import { FaUser, FaHistory } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
// import { RiLogoutCircleLine } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    role: '',
    city: '',
    age: '',
    country: '',
    state: '',
    contactNo: '',
    avatar: ''
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState('profile');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const user = await response.json();

        setUserInfo({
          username: user.data.username,
          email: user.data.email,
          role: user.data.role,
          city: user.data.city,
          age: user.data.age,
          country: user.data.country,
          state: user.data.state,
          contactNo: user.data.contactNo,
          avatar: generateProfilePicture(user.data.username)
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const extractedUsername = email.substring(0, email.indexOf('@'));
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          username: extractedUsername,
          email: email,
          avatar: generateProfilePicture(extractedUsername)
        }));
      } else {
        fetchUserData();
      }
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <div
        className={`fixed inset-y-0 left-0 bg-gray-900 text-gray-100 p-4 transform transition-transform duration-500 ${
          isSidebarOpen ? 'w-64 translate-x-0' : 'w-24 translate-x-[0rem]'
        } flex flex-col items-center`}
      >
        <div className="py-3 w-full flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative font-gelasio">
          <div className="flex items-center">
            <img
              src={userInfo.avatar}
              alt="User avatar"
              className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
            />
            {isSidebarOpen && (
              <div className="ml-4">
                <p className="text-lg font-semibold">{userInfo.username}</p>
                <p className="text-sm text-gray-400">{userInfo.email}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col mt-4 gap-2">
            <Link to="/profile">
              <button
                className={`flex items-center p-3 rounded-full text-lg font-semibold transition-transform duration-300 w-full text-left ${
                  view === 'profile' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setView('profile')}
              >
                <FaUser className={`text-center ${isSidebarOpen ? 'mr-2' : ''}`} />
                {isSidebarOpen && <span>Profile Details</span>}
              </button>
            </Link>
            {/* <Link to="/order-history"> */}
              <button
                className={`flex items-center p-3 rounded-full text-lg font-semibold transition-transform duration-300 w-full text-left ${
                  view === 'orderHistory' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setView('orderHistory')}
              >
                <FaHistory className={`text-xl ${isSidebarOpen ? 'mr-3' : ''}`}/>
                {isSidebarOpen && <span>Order History</span>}
              </button>
              {/* Home */}
              <Link to="/home">
              <button className="flex items-center p-3 rounded-full text-lg font-semibold bg-gray-800 hover:bg-gray-700 transition-transform duration-300 w-full text-left">
                <GiReturnArrow className={`text-xl ${isSidebarOpen ? 'mr-3' : ''}`} />
                {isSidebarOpen && <span>return to home</span>}
              </button>
            </Link>
            {/* </Link> */}
            {/* <Link to="/">
              <button className="flex items-center p-3 rounded-full text-lg font-semibold bg-gray-800 hover:bg-gray-700 transition-transform duration-300 w-full text-left">
                <RiLogoutCircleLine className={`text-xl ${isSidebarOpen ? 'mr-3' : ''}`} />
                {isSidebarOpen && <span>Logout</span>}
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <main className={`flex-grow p-6 transition-all duration-500 ${isSidebarOpen ? 'ml-64' : 'ml-24'}`}>
        {view === 'profile' ? (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Profile Details</h1>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={userInfo.avatar}
                  alt="User avatar"
                  className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-lg"
                />
                <div>
                  <p className="text-2xl font-bold text-blue-800">{userInfo.username}</p>
                  <p className="text-lg text-gray-700">{userInfo.email}</p>
                </div>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-black shadow-lg">
                <p><strong>Role:</strong> {userInfo.role}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-black shadow-lg">
                <p><strong>City:</strong> {userInfo.city}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-black shadow-lg">
                <p><strong>Age:</strong> {userInfo.age}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-black shadow-lg">
                <p><strong>Country:</strong> {userInfo.country}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-black shadow-lg">
                <p><strong>State:</strong> {userInfo.state}</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-black shadow-lg">
                <p><strong>Contact Number:</strong> {userInfo.contactNo}</p>
              </div>
            </div>
          </div>
        ) : (
          <OrderHistory />
        )}
      </main>
    </div>
  );
};

export default Profile;





