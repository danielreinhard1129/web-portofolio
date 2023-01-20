import Navbar from './Components/Navbar';
import Landing from './Pages/Landing';
import Footer from './Components/Footer';
import 'flowbite';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className=''>
        <Landing />
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
