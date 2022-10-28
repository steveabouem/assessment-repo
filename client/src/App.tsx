import {
  MemoryRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CreateStudentTab from './components/tabs/student-create/CreateStudentTab';
import StudentLookupTab from './components/tabs/student-lookup/LookupTab';
import"./App.scss";

const routes = [
  { path: '/search', component: <StudentLookupTab />},
  { path: '/new', component: <CreateStudentTab />},
];

function App() {
  return (
    <MemoryRouter initialEntries={['/', '/search']}>
      <div className="main-container h-100 w-100 position-absolute overflow-hidden">
        <div className="tab-links-wrapper d-flex mb-2">
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
