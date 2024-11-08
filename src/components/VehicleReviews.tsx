import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectVehicleById } from "../redux/vehicles/selectors";
import { getVehicleById } from "../redux/vehicles/operations";
import { AppDispatch } from "../redux/store";

const VehicleReviews = () => {
  const { vehicleId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const vehicleById = useSelector(selectVehicleById);

  useEffect(() => {
    if (!vehicleId || vehicleById) return;
    dispatch(getVehicleById(vehicleId));
  }, [vehicleId, vehicleById, dispatch]);

  if (!vehicleById) return;
  const { reviews } = vehicleById;

  return (
    <div>
      {reviews.length > 0 && (
        <ul className="grid gap-11">
          {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
            <li key={reviewer_name}>
              <div className="flex items-center gap-4">
                <div className="w-[60px] h-[60px] bg-badges rounded-full flex items-center justify-center">
                  <span className="font-semibold text-2xl text-button">
                    {reviewer_name[0]}
                  </span>
                </div>
                <div>
                  <p>{reviewer_name}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => {
                      return (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < reviewer_rating
                              ? "fill-rating"
                              : "fill-badges"
                          }`}
                        >
                          <use href="/icons.svg#star"></use>
                        </svg>
                      );
                    })}
                  </div>
                </div>
              </div>
              <p className="font-normal text-base text-text">{comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VehicleReviews;
