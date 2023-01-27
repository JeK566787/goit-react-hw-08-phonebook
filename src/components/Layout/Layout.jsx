import Loader from 'components/Loader/Loader';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectAuthLoading } from 'redux/auth/selectors';
import { Box, Container, Flex, Spacer } from '@chakra-ui/react';

const routes = [
  // {
  //   label: 'Home',
  //   path: '/',
  //   privatePath: true,
  // },
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
  const authLoading = useSelector(selectAuthLoading);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Box
      w="100%"
      minH="1000px"
      bgGradient="linear-gradient(#8ced7d 0%, #c8fece 25%, #d2febf 50%)"
    >
      <Container maxW="container.sm" pt="20px">
        <Flex flexDirection="column">
          <header>
            <div>
              <nav>
                <ul>
                  <Flex>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <Spacer />
                    {routes.map(({ label, path, privatePath }) => {
                      return privatePath === isLoggedIn ? (
                        <li key={path}>
                          <Link to={path}>{label}</Link>
                        </li>
                      ) : null;
                    })}
                  </Flex>

                  {/*
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
              )} */}
                </ul>
              </nav>
            </div>
            {isLoggedIn && <UserMenu />}
          </header>

          <main>
            <Outlet />
          </main>

          {authLoading && <Loader />}
        </Flex>
      </Container>
    </Box>
  );
};

export default Layout;
