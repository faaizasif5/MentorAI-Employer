const dropdownStyles = (item, list, theme) => {
  return {
    fontWeight:
      list.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};
export default dropdownStyles;
