import { FC, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  gallery: {
    original: string;
  }[];
}

const VehicleGallery: FC<Props> = ({ gallery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const slides = gallery.map(({ original }) => ({ src: original }));

  return (
    <>
      <ul className="mb-7 flex items-center flex-wrap gap-12">
        {gallery.length > 0 &&
          gallery.map(({ original }, index) => {
            return (
              <li
                key={index}
                className="rounded-xl overflow-hidden cursor-pointer max-w-[300px] md:h-[312px]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={original}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </li>
            );
          })}
      </ul>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      )}
    </>
  );
};

export default VehicleGallery;
