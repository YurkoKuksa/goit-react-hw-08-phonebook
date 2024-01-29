import { useDispatch } from 'react-redux';

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

    dispatch();
    // userRegister({
    // name: name.value,
    // email: email.value,
    // password: password.value,
    // })
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
          Name <input type="text" name="name" />
        </label>
        <label style={{ margin: '16px' }}>
          Email <input type="email" name="email" />
        </label>
        <label style={{ margin: '16px' }}>
          Password <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
