"use client";

import {UserCard , CreateUserModal} from '@/components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { userState } from '@/types';

export default function Home() {
  const [users, setUsers] = useState <userState[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/users'); // Replace with your backend API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchUsers();
  }, []);

  const onCreateUser = async (name : string , email : string) => {
    
  }


 const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <button className='bg-blue-400 p-3 rounded-full text-white border border-black font-bold' onClick={handleOpenModal}>Create User</button>
    {users.map((user, index) => (
      <UserCard key={index} name={user.name} email={user.email} />
    ))}
    <CreateUserModal isOpen={isModalOpen} onClose={handleCloseModal} onCreateUser={onCreateUser} />
  </div>
  );
}
