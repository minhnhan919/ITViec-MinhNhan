import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";


import Header from './components/header';
import Search from './components/Location/search';
import Filter from './components/Filter/filter';
import InfoItViec from './components/InfoItViec/infoitviec';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Filter />
      <InfoItViec />
    </>
  )
}

export default App;
