export const Regex = {
  auth: {
    passwordRegex:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/,
    dateRegex: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    emailRegex: /@folio3.com$/i,
    phoneRegExp:
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
    nameRegex: /^(?:[A-Z][a-z'-]{1,20}\s?)+$/,
    cnic: /^\d{13}$/,
    contactNumberRegex: /^\d{11}$/,
    addressRegex: /^[0-9A-Za-z\s.,#-]+$/,
  },
};

export const validatorsValue = {
  auth: {
    minPasswordLength: 8,
    maxPasswordLength: 50,
    minCnicLength: 13,
    maxCnicLength: 13,
    minContactLength: 11,
    maxContactLength: 11,
    minAddressLength: 8,
    maxAddressLength: 100,
    minDescriptionLength: 30,
    maxDescriptionLength: 200,
  },
};
