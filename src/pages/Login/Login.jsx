import { userLoginThunk } from 'myRedux/auth/operations';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    dispatch(
      userLoginThunk({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div>
      <p
        style={{
          margin: '16px',
          fontSize: '20px',
          color: 'darkblue',
          fontWeight: '700',
        }}
      >
        Login
      </p>
      <form onSubmit={onSubmit}>
        <label style={{ margin: '16px' }}>
          Email <input type="email" name="email" />
        </label>
        <label style={{ margin: '16px' }}>
          Password <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <p style={{ margin: '16px' }}>You haven't signed up yet? </p>
      <Link
        style={{ fontWeight: '700', color: 'darkgreen', margin: '16px' }}
        to="/register"
      >
        Click here
      </Link>
    </div>
  );
};

export default Login;
