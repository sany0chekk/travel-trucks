import { useEffect, useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import Container from "../components/shared/Container";
import VehiclesList from "../components/VehiclesList";
import Button from "../components/ui/Button";
import React from "react";

const CatalogPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSidebarOpen]);

  return (
    <section className="pt-12 pb-16">
      <Container className="flex max-desktop:flex-col gap-4 desktop:gap-16">
        <Button
          variant="filled"
          className="py-2 px-8 rounded-md flex items-center gap-2 desktop:hidden mr-auto"
          onClick={toggleSidebar}
        >
          Filters
          <svg className="w-4 h-4 fill-white">
            <use href={`./icons.svg#bi_grid-3x3-gap`}></use>
          </svg>
        </Button>
        <div
          className={`max-desktop:h-screen max-desktop:p-4 max-desktop:absolute max-desktop:bg-white max-desktop:shadow-xl max-desktop:top-0 max-desktop:left-0 max-desktop:z-50 max-desktop:overflow-y-auto max-w-full md:max-w-[45%] lg:max-w-[35%] desktop:max-w-[25%] w-full transition-transform ${
            isSidebarOpen
              ? "max-desktop:translate-x-0"
              : "max-desktop:-translate-x-full"
          }`}
        >
          <FilterSidebar onClose={() => setIsSidebarOpen(false)} />
        </div>

        <VehiclesList />
      </Container>
    </section>
  );
};

export default CatalogPage;
