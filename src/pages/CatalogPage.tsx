import FilterSidebar from "../components/FilterSidebar";
import Container from "../components/shared/Container";
import VehiclesList from "../components/VehiclesList";

const CatalogPage = () => {
  return (
    <section>
      <Container className="flex items-start gap-16">
        <FilterSidebar />
        <VehiclesList />
      </Container>
    </section>
  );
};

export default CatalogPage;
