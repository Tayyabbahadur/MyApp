import Navbar from './components/Navbar';
import './App.css';
import Textarea from './components/Textarea';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className='container my-4'>
        <Textarea hadding="Enter text here to analyze" />
      </div>
    </>
  );
}

export default App;
