import './App.css';
import Header from './components/Header/Header';
import Sections from './components/Section/Sections';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="w-full h-full overflow-hidden ">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
