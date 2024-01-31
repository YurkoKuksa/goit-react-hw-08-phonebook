import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <ul style={{ display: 'flex', gap: '16px' }}>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
