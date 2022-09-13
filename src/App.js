import { Route } from 'wouter';
import Home from './pages/Home/index'
import Documentacion from './pages/Documentacion';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div>
      <Route component={ Home } path="/" />
      <Route component={ Documentacion } path="/doumentacion-tecnica" />
    </div>
  );
}

export default App;
