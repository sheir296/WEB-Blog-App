
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Router>
      <div>
       
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/admin" component={AdminPanel} />
        </main>
        <footer>
          {'App Developed By Sheir'}
        </footer>
      </div>
    </Router>
  );
};

export default App;
