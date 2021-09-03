<<<<<<< HEAD
export const formatCurrency = (price, locales = "us-US", currency = "R$") => {
=======
import moment from "moment";

export const formatCurrency = (price, locales = "pt-BR", currency = "BRL") => {
>>>>>>> dev01
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency,
  }).format(price);
};

<<<<<<< HEAD
// export const translateString = (string, language, API_key) => {
//   if (!API_key) {
//     return string;
//   } else {
//     let traslatedString;
//     return translate("Hello world", {
//       to: language,
//       key: API_key,
//     })
//       .then((res) => (traslatedString = res))
//       .catch((err) => console.log(err));
//   }
// };

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
=======
export const renderParam = (paramName, paramValue) => {
  if (paramValue && paramValue !== "" && paramValue !== null) {
    return `&${paramName}=${paramValue}`;
  }
  return "";
};

export const formatDate = (
  date,
  inputFormat = "YYYY-MM-DD",
  outputFormat = "MMM DD, YYYY"
) => {
  return moment(date, inputFormat).format(outputFormat);
};

export const removeDash = (str) => {
  return str.replace(/-/g, " ");
>>>>>>> dev01
};
