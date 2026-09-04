
import './App.css'
import HeaderComponent from './Component/HeaderComponent'
import FooterComponent from './Component/FooterComponent'
import ListEmployeeComponent from './Component/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './Component/EmployeeComponent';
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <HeaderComponent />

        <div className="content">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            
            <Route path="/employees" element={<ListEmployeeComponent />} />
          
            <Route path="/add-employee" element={<EmployeeComponent />} />
            <Route path="/update-employee/:id" element={<EmployeeComponent />} />
          </Routes>
        </div>

        <FooterComponent />

      </div>
    </BrowserRouter>
  )
}

export default App