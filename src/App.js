import harvardArt from './data/harvardArt';
import './App.css';
import GalleryNavigation from './components/GalleryNavigation';

function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records}/>

    </div>
  );
}

export default App;
