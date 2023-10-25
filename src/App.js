import './App.scss';
import TopBar from './components/topbar';
import NavBar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
