import React, { useState, useEffect } from "react";
import { useSidebar } from "../../context/SidebarContext";
import {jwtDecode} from "jwt-decode";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    membername: '',
    oldPassword: '',
    name: '',
    YOB: '',
    isAdmin: false,
    newPassword: '',
    confirmPassword: '',
  });
  const { setShowSidebar } = useSidebar();
  const [isEditable, setIsEditable] = useState(false);
  const token = localStorage.getItem("accessToken") || "";
  const [userData, setUserData] = useState(null);
console.log(userData);
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserData(decoded);
      setProfileData({
        membername: decoded.member,
        oldPassword: '',
        name: decoded.name,
        YOB: decoded.YOB,
        isAdmin: decoded.isAdmin,
        newPassword: '',
        confirmPassword: '',
      });
    }
  }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (profileData.newPassword !== profileData.confirmPassword) {
      alert('New password and confirm password do not match');
      return;
    }
    try {
      const token = localStorage.getItem("accessToken");
      await axios.put(`http://localhost:8080/accounts/${userData.userId}`, profileData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile updated successfully!');
      navigate('/profile/')
    } catch (error) {
      console.error('Error updating profile', error);
      alert('Failed to update profile');
    }
  };

  useEffect(() => {
    setShowSidebar(false); // Hide the sidebar
    return () => {
      setShowSidebar(true); // Show the sidebar when leaving the component
    };
  }, [setShowSidebar]);

  const handleEditProfileClick = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className={`mx-auto w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg ${isEditable ? "h-auto" :"mb-[10vh]"}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <button
          className="underline text-blue-500 cursor-pointer"
          onClick={handleEditProfileClick}
        >
          {isEditable ? "Cancel" : "Edit Profile"}
        </button>
      </div>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        <strong className="underline">Edit profile*</strong>: edit all profile include the password
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={profileData.name}
                disabled={!isEditable}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="YOB"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Year of Birth (YOB)
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={profileData.YOB}
                type="number"
                name="YOB"
                id="YOB"
                autoComplete="YOB"
                disabled={!isEditable}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="membername"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                onChange={handleChange}
                value={profileData?.membername}
                id="membername"
                name="membername"
                type="text"
                autoComplete="username"
                disabled={!isEditable}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {isEditable && (
            <>
              <div className="col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Old Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={profileData.password}
                    type="password"
                    name="oldPassword"
                    id="password"
                    autoComplete="current-password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={profileData.newPassword}
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    autoComplete="new-password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleChange}
                    value={profileData.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoComplete="new-password"
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          {isEditable && (
            <div className="col-span-full flex justify-end my-4">
              <button
                type="submit"
                className=" mr-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Submit
              </button>
              <button
                type="button"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-gray-500 border border-2 border-gray-500 rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-primary-900 hover:bg-gray-300"
                onClick={handleEditProfileClick}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
