import { useThunk } from '../hooks/useThunk';
import { deleteUser } from '../store';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { MdArrowDropDown } from 'react-icons/md';

const UserListItem = ({ user }) => {
  const [doDeleteUser] = useThunk(deleteUser);

  const handleDeleteUser = (user) => {
    doDeleteUser(user);
  };

  return (
    <div className="mb-2 rounded border">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex gap-3 items-center">
          <RiDeleteBin2Fill
            onClick={() => handleDeleteUser(user)}
            color="red"
            size={20}
            cursor="pointer"
          />{' '}
          {user.name}
        </div>
        <MdArrowDropDown
          className="hover:animate-pulse"
          color="blue"
          size={50}
        />
      </div>
    </div>
  );
};

export default UserListItem;
