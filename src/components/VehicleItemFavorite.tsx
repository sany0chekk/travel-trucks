import React from "react";
import { FC, useEffect, useState } from "react";

interface Props {
  vehicleId: string;
  className?: string;
}

const VehicleItemFavotire: FC<Props> = ({ vehicleId, className = "" }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteVehicles = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(favoriteVehicles.includes(vehicleId));
  }, [vehicleId]);

  const toggleFavorite = () => {
    const favoriteVehicles = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (isFavorite) {
      const updatedFavorites = favoriteVehicles.filter(
        (favId: string) => favId !== vehicleId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favoriteVehicles.push(vehicleId);
      localStorage.setItem("favorites", JSON.stringify(favoriteVehicles));
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite} className={`md:ml-3 ${className}`}>
      <svg
        className={`w-5 h-5 transition-colors ${
          isFavorite ? "fill-button" : "fill-main"
        }`}
      >
        <use href="./icons.svg#heart"></use>
      </svg>
    </button>
  );
};

export default VehicleItemFavotire;
