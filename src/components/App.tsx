import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import {
  getAllVehicles,
  getAllVehiclesLocation,
} from "../redux/vehicles/operations";
import { AppDispatch } from "../redux/store";
import PageLoader from "./PageLoader/PageLoader";
import { Toaster } from "react-hot-toast";
import React from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage"));
const VehicleDetailsPage = lazy(() => import("../pages/VehicleDetailsPage"));
const VehicleFeatures = lazy(() => import("./VehicleFeatures"));
const VehicleReviews = lazy(() => import("./VehicleReviews"));

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllVehicles());
    dispatch(getAllVehiclesLocation());
  }, [dispatch]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:vehicleId" element={<VehicleDetailsPage />}>
              <Route path="features" element={<VehicleFeatures />} />
              <Route path="reviews" element={<VehicleReviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
