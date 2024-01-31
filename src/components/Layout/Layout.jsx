import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

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
            <p> || HOME ||</p>
          </Link>
          <Link style={{ fontWeight: '700', margin: '20px' }} to="/contacts">
            Go to My Phonebook
          </Link>

          {isLoggedIn ? <UserMenu /> : <Navigation />}
        </div>

        <hr />
      </header>
      <Suspense /* fallback={<Loader />} */>
        <Outlet />
      </Suspense>
    </>
  );
};
