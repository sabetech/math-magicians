import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
