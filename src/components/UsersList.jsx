import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import { faker } from '@faker-js/faker';

const UsersList = () => {
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [loadingUserError, setLoadingUserError] = useState(null);
  const { data } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoadingUser(true);
    dispatch(fetchUsers())
      .unwrap()
      .then(() => setIsLoadingUser(false))
      .catch((error) => {
        setLoadingUserError(error);
        setIsLoadingUser(false);
      });
  }, []);

  const handleAddUser = () => {
    dispatch(
      addUser({
        name: faker.person.firstName(),
      })
    );
  };

  if (isLoadingUser) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }

  if (loadingUserError) {
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
        <Button primary onClick={handleAddUser}>
          Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
