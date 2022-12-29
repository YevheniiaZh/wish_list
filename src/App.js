
import './App.css';
import { List } from './List';
import image from "./point.jpg";

function App() {
  return (
   <div>
    <div className='container'>
    <h1> Dear Santa!</h1>
    </div>
    <div className='container'>
    <h2>My Christmas Wish List:</h2>
    </div>
    <List />
    <div className='container'>
<img src={image} alt="tree" width="200px" />
    </div>
   </div>
  );
}

export default App;
