import UsersList from './components/UsersList';
import Header from './components/Header';
const App = () => {
  return (
    <>
      <Header text="Media App" />
      <div className="container mx-auto">
        <UsersList />
      </div>
    </>
  );
};

export default App;
