export const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(ageInYears);
};

export const itemsPerPage = 4;
export function paginateAndFilterData(Data, currentPage, filterText) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = Data.filter(
    (item) =>
      item.first.toLowerCase().includes(filterText.toLowerCase()) ||
      item.last.toLowerCase().includes(filterText.toLowerCase()) ||
      item.country.toLowerCase().includes(filterText.toLowerCase())
  );
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return currentData;
}
