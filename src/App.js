import './App.css';
import Announcement from './components/announcement';
import MiddleCraousal from './components/middleCraousal';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Announcement/>
      <Navbar/>
      <MiddleCraousal/>
    </div>
  );
}

export default App;
