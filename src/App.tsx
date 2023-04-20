import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*"  element={<IndexPage />}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
