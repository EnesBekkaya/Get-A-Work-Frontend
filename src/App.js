import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import SearchBox from './layouts/SearchBox';

function App() {
  return (
    <div className="App">
     <Navi></Navi>
     
        <SearchBox/>
    </div>
    
  );
}
export default App;
