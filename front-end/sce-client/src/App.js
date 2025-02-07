
import { Routes, Route } from 'react-router-dom';
import CreateEquipment from './pages/CreateEquipment';
import Home from './pages/Home';
import EquipmentDetails from './pages/EquipmentDetails';
import EquipmentMagement from './pages/EquipmentManagement';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={ <Home />} />
        <Route path="/home" element={ <Home />} />
        <Route path="/equipments" element={ <EquipmentMagement/>} />
        <Route path="/users" element={ <UserManagement/>} />
        <Route path="/create-equipment" element={ <CreateEquipment/>} />
        <Route path="/details/:id" element={ <EquipmentDetails />} />
      </Routes>

    </div>
  );
}

export default App;
