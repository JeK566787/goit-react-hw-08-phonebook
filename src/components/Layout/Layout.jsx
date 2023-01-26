import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectLoading } from 'redux/contacts/selectors';

const routes = [
  {
    label: 'Home',
    path: '/',
    privatePath: false,
  },
  {
    label: 'Register',
    path: '/register',
    privatePath: false,
  },
  {
    label: 'Login',
    path: '/login',
    privatePath: false,
  },
  {
    label: 'Contacts',
    path: '/contacts',
    privatePath: true,
  },
];

const Layout = () => {
  const isLoading = useSelector(selectLoading);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              {/* {routes.map(({ label, path, privatePath }) => {
                return privatePath === isLoggedIn ? (
                  <li key={path}>
                    <Link to={path}>{label}</Link>
                  </li>
                ) : null;
              })} */}
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/register">REGISTER</Link>
              </li>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
              {isLoggedIn && (
                <li>
                  <Link to="contacts">CONTACTS</Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Outlet />
      </main>
      {isLoading && <Loader />}
    </>
  );
};

export default Layout;
