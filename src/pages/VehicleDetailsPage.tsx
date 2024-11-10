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
import RentalcarForm from "../components/RentalcarForm";
import VehicleGallery from "../components/VehicleGallery";
import RatingAndLocation from "../components/RatingAndLocation";

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
          <RatingAndLocation
            rating={rating}
            reviews={reviews.length}
            location={location}
          />
          <p className="mb-7 font-semibold text-2xl">€{price.toFixed(2)}</p>
          <VehicleGallery gallery={gallery} />
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

          <div className="flex max-lg:flex-col gap-10">
            <div className="lg:w-[55%]">
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </div>
            <RentalcarForm />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VehicleDetailsPage;
