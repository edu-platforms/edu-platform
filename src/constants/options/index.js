const fromOptions = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
];

const genderOptions = [
  { disabled: true, value: 0, label: "Not given" },
  { value: 1, label: "Male" },
  { value: 2, label: "Female" },
];

const livingOptions = [
  { value: "canada", label: "Canada" },
  { value: "usa", label: "USA" },
];

const accentOptions = [
  { value: "british", label: "British" },
  { value: "american", label: "American" },
];

const dayOptions = [
  { disabled: true, value: 0, label: "Days per week" },
  { value: 1, label: "1 days per week" },
  { value: 2, label: "2 days per week" },
  { value: 3, label: "3 days per week" },
  { value: 4, label: "4 days per week" },
  { value: 5, label: "5 days per week" },
];

const timeOptions = [
  { disabled: true, value: 0, label: "Minutes per day" },
  { value: 15, label: "15 minutes" },
  { value: 30, label: "30 minutes" },
  { value: 45, label: "45 minutes" },
  { value: 60, label: "60 minutes" },
];

export {
  fromOptions,
  livingOptions,
  genderOptions,
  accentOptions,
  dayOptions,
  timeOptions,
};
