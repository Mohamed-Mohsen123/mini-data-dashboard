import { getData } from "./dataGetter.js";
let formatData;
getData()
  .then((data) => {
    formatData = data.map(({ id, name, phone, email, address: { city } }) => ({
      id,
      name,
      phone,
      email,
      city,
    }));
  })
  .catch((err) => {
    console.log(err);
    formatData = null;
  });

export { formatData };
