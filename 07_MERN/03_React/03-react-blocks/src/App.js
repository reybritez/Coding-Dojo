import './App.css';
import Header from './Componentes/Header';
import Navigation from './Componentes/Navigation';
import Main from './Componentes/Main';
import styles from './css/App.module.css'


function App() {
  return (
    <div className={styles.main}>
        <Header />
        <div className={styles.cols}>
        <Navigation />
        <Main>
        </Main>
        </div>
    </div>
  );
}

export default App;
