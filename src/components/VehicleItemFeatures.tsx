import { FC } from "react";

interface Props {
  engine?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
}

const VehicleItemFeatures: FC<Props> = ({
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) => {
  const features = [
    { condition: engine, icon: "fuel-pump", label: engine },
    { condition: AC, icon: "wind", label: "AC" },
    { condition: bathroom, icon: "ph_shower", label: "Bathroom" },
    { condition: kitchen, icon: "cup-hot", label: "Kitchen" },
    { condition: TV, icon: "tv", label: "TV" },
    { condition: radio, icon: "ui-radios", label: "Radio" },
    {
      condition: refrigerator,
      icon: "solar_fridge-outline",
      label: "Refrigerator",
    },
    { condition: microwave, icon: "lucide_microwave", label: "Microwave" },
    { condition: gas, icon: "hugeicons_gas-stove", label: "Gas" },
    { condition: water, icon: "ion_water-outline", label: "Water" },
  ];

  return (
    <ul className="grid grid-cols-3 gap-2">
      {features.map(
        ({ condition, icon, label }) =>
          condition && (
            <li
              key={label}
              className="flex items-center gap-2 py-3 px-4 rounded-full bg-badges"
            >
              <svg className="w-5 h-5">
                <use href={`./icons.svg#${icon}`} />
              </svg>
              <p className="capitalize">{label}</p>
            </li>
          )
      )}
    </ul>
  );
};

export default VehicleItemFeatures;
