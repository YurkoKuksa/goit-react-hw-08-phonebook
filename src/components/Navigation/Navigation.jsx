import { BoxUl, ClickLink, List } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <BoxUl>
          <List>
            <ClickLink to="/register">Sign up</ClickLink>
          </List>
          <List>
            <ClickLink to="/login">Login</ClickLink>
          </List>
        </BoxUl>
      </nav>
    </div>
  );
};
