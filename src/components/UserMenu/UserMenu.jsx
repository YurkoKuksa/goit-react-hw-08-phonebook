import { userLogoutThunk } from 'myRedux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'myRedux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div>
      <p>mango@mail.com</p>
      <button>Logout</button>

      {isLoggedIn && user?.name && (
        <div>
          <p>Welcome, {user.name}</p>
          <button type="button" onClick={() => dispatch(userLogoutThunk())}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
