import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = {name: 'yoshi', age: 30 }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
