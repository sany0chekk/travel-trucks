import Container from "../components/shared/Container";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Button variant="bordered" className="py-2 px-4">
          Load More
        </Button>
      </Container>
    </div>
  );
};

export default HomePage;
