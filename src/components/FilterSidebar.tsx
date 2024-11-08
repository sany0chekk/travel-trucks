import FiltersList from "./FiltersList";

const FilterSidebar = () => {
  const equipment = [
    {
      icon: "wind",
      label: "AC",
    },
    {
      icon: "diagram",
      label: "Automatic",
    },
    {
      icon: "cup-hot",
      label: "Kitchen",
    },
    {
      icon: "tv",
      label: "TV",
    },
    {
      icon: "ph_shower",
      label: "Bathroom",
    },
  ];

  const types = [
    {
      icon: "bi_grid-1x2",
      label: "Van",
    },
    {
      icon: "bi_grid",
      label: "Fully Inegrated",
    },
    {
      icon: "bi_grid-3x3-gap",
      label: "Alcove",
    },
  ];

  return (
    <aside className="max-w-[25%] w-full">
      <div>
        <p>Location</p>
        <select name="" id="" className="input w-full">
          <option value="">Kyiv, Ukraine</option>
        </select>
      </div>
      <div>
        <p>Filters</p>
        <div>
          <h2>Vehicle equipment</h2>
          <FiltersList items={equipment} />
        </div>
        <div>
          <h2>Vehicle type</h2>
          <FiltersList items={types} />
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
