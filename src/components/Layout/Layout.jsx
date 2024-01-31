import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { selectIsLoggedIn } from 'myRedux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { Loader } from 'components/Loader/Loader';
import {
  BoxLayout,
  Container,
  HeaderContainer,
  HeaderContent,
  HomeLink,
  NavigationLink,
  Par,
} from './Layout.styled';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <HomeLink to="/">
            <Par> || HOME ||</Par>
          </HomeLink>
          <BoxLayout>
            <NavigationLink to="/contacts">Go to My Phonebook</NavigationLink>

            {isLoggedIn ? <UserMenu /> : <Navigation />}
          </BoxLayout>
        </HeaderContent>
      </HeaderContainer>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
