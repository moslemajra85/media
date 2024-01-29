import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { faker } from '@faker-js/faker';
import { useThunk } from '../hooks/useThunk';

import UserListItem from './UserListItem';

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

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error Fetching Data...</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem user={user} key={user.id} />;
    });
  }

  return (
    <div>
      <div className="flex p-2 justify-between items-center">
        <p className="text-xl">Users</p>
        <Button loading={isCreatingUser}  onClick={handleAddUser}>
          +Add User
        </Button>
      </div>

      {content}
    </div>
  );
};

export default UsersList;
