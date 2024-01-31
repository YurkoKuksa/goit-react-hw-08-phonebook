import { registerThunk } from 'myRedux/auth/operations';
import { Picture } from 'pages/Home/Home.styled';
import { useDispatch } from 'react-redux';

// Boiko
// email: 'boiko@email.com';
// password: '12345678';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    dispatch(
      registerThunk({
        name: name.value,
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
        Sign Up
      </p>
      <form onSubmit={onSubmit}>
        <label style={{ margin: '16px' }}>
          Name <input type="text" name="name" autoComplete="username" />
        </label>
        <label style={{ margin: '16px' }}>
          Email <input type="email" name="email" autoComplete="user-email" />
        </label>
        <label style={{ margin: '16px' }}>
          Password
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <hr />
      <div style={{ margin: '20px', overflow: 'hidden', height: '400px' }}>
        <Picture
          src="https://www.shutterstock.com/image-photo/open-book-on-table-close-260nw-2282764379.jpg"
          alt="Pitcure of the Phonebook when you loged in"
        />
      </div>
    </div>
  );
};

export default Register;
