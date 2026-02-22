const getData = async () => {
  const rawData = await fetch("data.json");
  const data = await rawData.json();
  return data;
};

export { getData };
