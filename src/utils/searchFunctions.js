export const searchByName = (item, searchTerm) => {
  return item.name
    .toLowerCase()
    .trim()
    .includes(searchTerm.toLowerCase().trim());
};

export const searchByPhone = (item, searchTerm) => {
  return (
    item.phone?.trim().startsWith(searchTerm.trim()) ||
    item.phone?.substring(2).startsWith(searchTerm)
  );
};

export const searchByGovernance = (item, searchTerm) => {
  return item.governance
    ?.toLowerCase()
    ?.trim()
    ?.includes(searchTerm.toLowerCase().trim());
};

export const searchBySeparation = (item, searchTerm) => {
  return item.separation
    ?.toLowerCase()
    ?.trim()
    ?.includes(searchTerm.toLowerCase().trim());
};
