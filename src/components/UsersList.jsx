import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { faker } from '@faker-js/faker';
import { useThunk } from '../hooks/useThunk';

const UsersList = () => {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, errorCreatingUser] = useThunk(addUser);
  const { data } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser({ name: faker.person.firstName() });
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUsersError) {
    return <div>Error Fetching Data...</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 rounded border">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <p className="text-xl">Users</p>
        <Button loading={isCreatingUser} primary onClick={handleAddUser}>
          Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
