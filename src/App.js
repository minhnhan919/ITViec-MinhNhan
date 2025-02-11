import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";


import Header from './components/header';
import Search from './components/Location/search';
import Filter from './components/Filter/filter';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Filter />
    </>
  )
}

export default App;
