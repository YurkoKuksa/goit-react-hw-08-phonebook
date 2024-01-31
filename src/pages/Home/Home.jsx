import { Link } from 'react-router-dom';
import { Container, Picture, Title } from './Home.styled';

const Home = () => {
  // const [isSignedUp, setIsSignedUp] = useState(false);
  // const handleSignUp = () => {
  //   setIsSignedUp(true);
  // };
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <Title>Welcome to the Phonebook</Title>
      <p style={{ margin: '20px' }}>
        Introducing Web Phonebook, a cutting-edge solution transforming the
        landscape of contact management. Web Phonebook is a digital platform
        designed to elevate the way we organize and access our contacts,
        providing users with a seamless and efficient experience. Boasting
        advanced search functionalities, intuitive categorization, and
        cross-device synchronization, Web Phonebook redefines the conventional
        approach to contact directories. Bid farewell to traditional paper-based
        methods and embrace a more streamlined way to stay connected. Explore
        the next generation of contact management with Web Phonebook!
      </p>
      <Link style={{ fontWeight: '700', margin: '20px' }} to="/contacts">
        Go to My Phonebook
      </Link>
      <Picture
        src="https://www.clker.com/cliparts/N/d/2/R/F/r/phone-book.svg"
        alt="Pitcure of the Phonebook"
      />

      <hr />
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
