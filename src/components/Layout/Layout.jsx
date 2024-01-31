import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';

import { selectIsLoggedIn } from 'myRedux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: ' 20px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/">
            <p>HOME || ALONE </p>
          </Link>

          {isLoggedIn ? <UserMenu /> : <Navigation />}
        </div>

        {isLoggedIn && <UserMenu />}

        <hr />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
