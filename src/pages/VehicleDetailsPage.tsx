import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { getVehicleById } from "../redux/vehicles/operations";
import {
  selectDetailsLoading,
  selectVehicleById,
} from "../redux/vehicles/selectors";
import Container from "../components/shared/Container";
import PageLoader from "../components/PageLoader/PageLoader";
import Loader from "../components/Loader";
import Button from "../components/ui/Button";

const VehicleDetailsPage = () => {
  const { vehicleId } = useParams();
  const isLoading = useSelector(selectDetailsLoading);
  const vehicleById = useSelector(selectVehicleById);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!vehicleId) return;
    dispatch(getVehicleById(vehicleId));
  }, [vehicleId, dispatch]);

  if (isLoading || !vehicleById)
    return (
      <div className="w-full h-full flex items-center justify-center">
        <PageLoader />
      </div>
    );
  const { name, price, rating, location, description, gallery, reviews } =
    vehicleById!;

  return (
    <section className="pt-12 pb-20">
      <Container>
        <div className="pb-16">
          <h2 className="mb-2 font-semibold text-2xl">{name}</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 fill-rating">
                <use href="/icons.svg#star"></use>
              </svg>
              <p className="font-normal text-base underline">{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4">
                <use href="/icons.svg#map"></use>
              </svg>
              <p className="font-normal text-base">{location}</p>
            </div>
          </div>
          <p className="mb-7 font-semibold text-2xl">€{price}</p>
          <ul
            className="mb-7 grid gap-12"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {gallery.length > 0 &&
              gallery.map(({ original }, index) => {
                return (
                  <li key={index} className="rounded-xl overflow-hidden">
                    <img src={original} alt="" />
                  </li>
                );
              })}
          </ul>
          <p className="font-normal text-base text-text">{description}</p>
        </div>
        <div className="flex flex-col">
          <nav className="flex items-center gap-10">
            <NavLink
              to="features"
              className={({ isActive }) =>
                `pb-6 font-semibold text-xl relative ${
                  isActive &&
                  "after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-button"
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                `pb-6 font-semibold text-xl relative ${
                  isActive &&
                  "after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-1 after:bg-button"
                }`
              }
            >
              Reviews
            </NavLink>
          </nav>
          <span className="w-full h-[1px] bg-grayLight mb-11" />

          <div className="flex gap-10">
            <div className="w-[55%]">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
            <div className="w-[45%] py-11 px-14 border border-grayLight rounded-xl">
              <p className="font-semibold text-xl mb-2">
                Book your campervan now
              </p>
              <p className="font-normal text-base text-gray mb-6">
                Stay connected! We are always ready to help you.
              </p>
              <form action="" className="grid gap-3.5">
                <input type="text" className="input" placeholder="Name*" />
                <input type="email" className="input" placeholder="Email*" />
                <input
                  type="date"
                  className="input"
                  placeholder="Booking date*"
                />
                <textarea className="input resize-none" placeholder="Comment" />
                <Button
                  variant="filled"
                  className="max-w-[166px] w-full py-4 mx-auto"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VehicleDetailsPage;
