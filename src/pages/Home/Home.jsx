import { Link } from 'react-router-dom';
import { Container, Paragraph, Picture, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to the Phonebook</Title>
      <Paragraph>
        Introducing Web Phonebook, a cutting-edge solution transforming the
        landscape of contact management. Web Phonebook is a digital platform
        designed to elevate the way we organize and access our contacts,
        providing users with a seamless and efficient experience. Boasting
        advanced search functionalities, intuitive categorization, and
        cross-device synchronization, Web Phonebook redefines the conventional
        approach to contact directories. Bid farewell to traditional paper-based
        methods and embrace a more streamlined way to stay connected. Explore
        the next generation of contact management with Web Phonebook!
      </Paragraph>
      <Link to="/contacts">Go to My Phonebook</Link>
      <Picture
        src="https://www.clker.com/cliparts/N/d/2/R/F/r/phone-book.svg"
        alt="Pitcure of the Phonebook"
      />

      <hr />
      <hr />
    </Container>
  );
};

export default Home;
