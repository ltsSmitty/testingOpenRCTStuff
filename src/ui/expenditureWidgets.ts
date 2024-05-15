import { combinedLabelSpinner } from "./utilityControls";

const expenditureNames = [
  "Ride Contruction",
  "Ride Running Costs",
  "Land Purchase",
  "Landscaping",
  "Park Entrance Tickets",
  "Park Ride Tickets",
  "Shop Sales",
  "Shop Stock",
  "Food/Drink Sales",
  "Food/Drink Stock",
  "Wages",
  "Marketing",
  "Research",
  "Loan Interest",
];

const expenditureTypeSpinner = (title: string, expenditureType: ExpenditureTypeEnum) =>
  combinedLabelSpinner(100, 59, {
    text: title,
    minimum: 0,
    maximum: 1000,
    value: park.getExpenditureMultiplier(expenditureType),
    step: 10,
    wrapMode: "clamp",
    onChange: (value) => {
      park.setExpenditureMultiplier(expenditureType, value);
    },
    // disabled: true,
  });

export const expenditureWidgets = expenditureNames.map((name, index) => {
  return expenditureTypeSpinner(name, index);
});
