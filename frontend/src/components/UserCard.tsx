// components/UserCard.tsx
import React from 'react';

interface User {
  name: string;
  email: string;
  // Add other user properties as needed
}

const UserCard: React.FC<User> = ({ name, email }) => {
  return (
    <div className={`userCard max-w-xs rounded overflow-hidden shadow-lg my-2`}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
        {/* Add other user information here */}
      </div>
    </div>
  );
};

export default UserCard;
