// components/CreateUserModal.tsx
import { useState } from 'react';

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateUser: (name: string, email: string) => void;
}

const CreateUserModal: React.FC<CreateUserModalProps> = ({ isOpen, onClose, onCreateUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateUser = () => {
    onCreateUser(name, email);
    setName('');
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Create User</p>
            <div className="modal-close cursor-pointer z-50" onClick={onClose}>
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path d="M18 1.41L16.59 0 9 7.59 1.41 0 0 1.41 7.59 9 0 16.59 1.41 18 9 10.41 16.59 18 18 16.59 10.41 9 18 1.41z" />
              </svg>
            </div>
          </div>

          <div className="my-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex justify-end pt-2">
            <button
              className="px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="modal-close px-4 bg-indigo-500 p-3 rounded-lg text-white hover:bg-indigo-400"
              onClick={handleCreateUser}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserModal;
