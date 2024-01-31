import { userLogoutThunk } from 'myRedux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'myRedux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Click } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <div>
      {isLoggedIn && user?.name && (
        <Box>
          <p>Welcome, {user.name}</p>
          <Click type="button" onClick={() => dispatch(userLogoutThunk())}>
            Logout
          </Click>
        </Box>
      )}
    </div>
  );
};

export default UserMenu;
