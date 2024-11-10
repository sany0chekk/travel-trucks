import React from "react";
import Container from "../components/shared/Container";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <section className="bg-hero-bg flex flex-grow">
      <Container className="flex flex-grow items-center">
        <div>
          <h1 className="font-semibold text-white text-3xl md:text-5xl mb-2 md:mb-4">
            Campers of your dreams
          </h1>
          <p className="font-semibold text-white text-base md:text-2xl mb-10">
            You can find everything you want in our catalog
          </p>
          <Button
            type="link"
            href="catalog"
            variant="filled"
            className="py-3 md:py-4 px-10 md:px-12"
          >
            View now
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
