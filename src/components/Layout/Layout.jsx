// import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
// import { Suspense } from 'react';

import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: ' 20px',
      }}
    >
      {/* <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} /> */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">Home</Link>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <hr />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
