import Panel from './Panel';
const Header = ({ text }) => {
  return (
    <Panel>
      <p className="text-2xl text-center animate-fade-down">{text}</p>
    </Panel>
  );
};

export default Header;
