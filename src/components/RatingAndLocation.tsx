import { FC } from "react";

interface Props {
  rating: number;
  reviews: number;
  location: string;
}

const RatingAndLocation: FC<Props> = ({ rating, reviews, location }) => {
  return (
    <div className="flex max-md:flex-col md:items-center gap-4 mb-4">
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4 fill-rating">
          <use href="/icons.svg#star"></use>
        </svg>
        <p className="font-normal text-base underline">{`${rating}(${reviews} Reviews)`}</p>
      </div>
      <div className="flex items-center gap-1">
        <svg className="w-4 h-4">
          <use href="/icons.svg#map"></use>
        </svg>
        <p className="font-normal text-base">{location}</p>
      </div>
    </div>
  );
};

export default RatingAndLocation;
