import { TableForm, AddForm, EditForm} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <>
   
      <Router>
      <Routes>
        <Route path='/' element={<TableForm/>} />
        <Route path="/edit-item/:id" element={<EditForm />} />
        <Route path="/add-item" element={<AddForm />} />

      </Routes>
      </Router>
     
    </>
  )
}

export default App
