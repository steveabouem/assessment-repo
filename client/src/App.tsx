import {
  MemoryRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CreateStudentTab from './components/tabs/CreateStudentTab';
import SearchStudentsTab from './components/tabs/SearchTab';

const routes = [
  { path: '/', component: <SearchStudentsTab />},
  { path: '/new', component: <CreateStudentTab />},
];

function App() {
  return (
    <MemoryRouter initialEntries={['/']}>
        <div>
          <NavLink to="/">Search by school</NavLink>
          <NavLink to="/new">Add student</NavLink>
        </div>
        <Routes>
          {routes.map(({path, component}) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
    </MemoryRouter>
  );
}

export default App;
