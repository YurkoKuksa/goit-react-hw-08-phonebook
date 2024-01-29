import { Link } from 'react-router-dom';
import { Container, Picture, Title } from './Home.styled';

// import Loader from 'components/Loader/Loader';

const Home = () => {
  // const [isSignedUp, setIsSignedUp] = useState(false);
  // const handleSignUp = () => {
  //   setIsSignedUp(true);
  // };

  return (
    <Container>
      <Title>Welcome to the Phonebook</Title>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        reiciendis quaerat nesciunt, minima eum tenetur doloribus consequatur
        sequi ad atque aliquid et quis earum reprehenderit cumque, a laboriosam
        ullam consectetur!
      </p>
      <Picture
        src="https://www.clker.com/cliparts/N/d/2/R/F/r/phone-book.svg"
        alt="Pitcure of the Phonebook"
      />
      <Link>Sign up</Link> <p>or</p> <Link>Login</Link>
      <hr />
      <hr />
      <Link to="/contacts">Go to My Phonebook</Link>
      <Picture
        src="https://www.shutterstock.com/image-photo/open-book-on-table-close-260nw-2282764379.jpg"
        alt="Pitcure of the Phonebook when you loged in"
      />
      <hr />
      {/* {isSignedUp ? (
        <>
          <Picture
            src="https://www.clker.com/cliparts/N/d/2/R/F/r/phone-book.svg"
            alt="Pitcure of the Phonebook"
          />
          <Link onClick={handleSignUp}>Sign up</Link> <p>or</p>{' '}
          <Link>Login</Link>
        </>
      ) : (
        <>
          <Link>Go to My Phonebook</Link>
          <Picture
            src="https://www.clker.com/cliparts/N/d/2/R/F/r/phone-book.svg"
            alt="Pitcure of the Phonebook when you loged in"
          />
        </>
      )} */}
    </Container>
  );
};

export default Home;

// const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getMovie()
//       .then(movieData => {
//         setMovies(movieData);
//       })
//       .finally(() => setIsLoading(false));
//   }, []);

//   return (
//     <Container>
//       <Title>Trending Today</Title>
//       <MoviesList movies={movies} />
//       {isLoading && <Loader />}
//     </Container>
//   );
// };
