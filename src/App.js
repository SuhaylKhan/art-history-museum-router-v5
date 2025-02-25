import { Route, NavLink, Switch } from 'react-router-dom';

import harvardArt from './data/harvardArt';
import './App.css';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';

function App() {
  return (
    <div className='page-wrapper'>
      <GalleryNavigation galleries={harvardArt.records}/>
      <Switch>
      <Route exact path="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records}/>
      </Route>
      <Route exact path="/">
        <h2>Harvard Art Museum</h2>
        <p>Look, but Don't Touch. Please slect a Gallery in the navigation bar.</p>
      </Route>
     <Route>
       <h2>Page Not Found</h2>
     </Route>
      </Switch>
    </div>
  );
}

export default App;
