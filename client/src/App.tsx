import {
  MemoryRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CreateStudentTab from './components/tabs/student-create/CreateStudentTab';
import StudentLookupTab from './components/tabs/student-lookup/LookupTab';
import"./App.scss";
import logo from "./assets/logo.png";
import { ToastContainer } from "react-toast";

const routes = [
  { path: '/search', component: <StudentLookupTab />},
  { path: '/new', component: <CreateStudentTab />},
];

function App() {
  return (
    <MemoryRouter initialEntries={['/', '/search']}>
      <ToastContainer  position="top-right" delay={3000}/>
      <div className="main-container h-100 w-100 position-absolute overflow-hidden">
        <div className="tab-links-wrapper d-flex mb-2">
          <div className="logo-wrapper">
            <img src={logo} alt="main logo" />
            <span className="px-2">STUDENT REPOSITORY</span>
          </div>
          <NavLink  className={({ isActive }) => (
            `tab-link p-2 flex-1 text-uppercase text-decoration-none 
            ${isActive ? ' active' : ''}`
            )} 
            to="/search">
              Search by school
            </NavLink>
          <NavLink className={({ isActive }) => (
            `tab-link p-2 flex-1 text-uppercase text-decoration-none 
            ${isActive ? ' active' : ''}`
            )}
            to="/new">
              Add student
            </NavLink>
        </div>
        <Routes>
          {routes.map(({path, component}) => (
            <Route key={path} path={path} element={component} />
            ))}
        </Routes>
      </div>
    </MemoryRouter>
  );
}

export default App;
