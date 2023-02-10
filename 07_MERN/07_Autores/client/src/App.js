import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import AuthorsAll from './components/AuthorsAll';
import AuthorsForms from './components/AuthorsForms';
import AuthorsEdit from './components/AuthorsEdit';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthorsAll/>} />
          <Route path='/new' element={<AuthorsForms/>} />
          <Route path='/edit/:id' element={<AuthorsEdit/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
