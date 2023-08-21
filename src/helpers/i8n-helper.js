import i18n from "i18next";

export const translation = (parentKey) => {
  return (childKey) => {
    return parentKey && childKey
      ? childKey && i18n.t(`${parentKey}.${childKey}`)
      : i18n.t(`${parentKey}`);
  };
};
