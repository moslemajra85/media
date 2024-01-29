import { useThunk } from '../hooks/useThunk';
import { deleteUser } from '../store';
import { RiDeleteBin2Fill } from 'react-icons/ri';

import ExpandablePanel from './ExpandablePanel';

const UserListItem = ({ user }) => {
  const [doDeleteUser, isLoading, error] = useThunk(deleteUser);

  const handleDeleteUser = (user) => {
    doDeleteUser(user);
  };

  const header = (
    <>
      <RiDeleteBin2Fill
        onClick={() => handleDeleteUser(user)}
        color="red"
        size={20}
        cursor="pointer"
      />{' '}
      {error && <div>Error deleting user...</div>}
      {user.name}
    </>
  );

  return (
    // <div className="mb-2 rounded border">
    //   <div className="flex p-2 justify-between items-center cursor-pointer">
    //     <div className="flex gap-3 items-center">
    //       <RiDeleteBin2Fill
    //         onClick={() => handleDeleteUser(user)}
    //         color="red"
    //         size={20}
    //         cursor="pointer"
    //       />{' '}
    //       {error && <div>Error deleting user...</div>}
    //       {user.name}
    //     </div>
    //     <MdArrowDropDown
    //       className="hover:animate-pulse"
    //       color="blue"
    //       size={50}
    //     />
    //   </div>
    // </div>
    <ExpandablePanel header={header}>content!!!!!!!!!!</ExpandablePanel>
  );
};

export default UserListItem;
