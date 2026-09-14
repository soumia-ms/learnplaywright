function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomString(length = 8, prefix = '') {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = prefix;

  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

function generateIndianMobileNumber() {
  const prefixes = ['6', '7', '8', '9'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const remainingDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
  return prefix + remainingDigits;
}

function generateUSMobileNumber() {
  const areaCode = generateRandomNumber(200, 999);
  const exchangeCode = generateRandomNumber(200, 999);
  const lineNumber = generateRandomNumber(1000, 9999);
  return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
}

function generateEmail(domain = 'example.com', prefixLength = 8) {
  const prefix = generateRandomString(prefixLength).toLowerCase();
  return `${prefix}@${domain}`;
}

function generateEmployeeData() {
  return {
    firstName: generateRandomString(6, 'User'),
    lastName: generateRandomString(5, 'Test'),
    employeeId: String(generateRandomNumber(1000, 9999)),
    email: generateEmail(),
    indianMobile: generateIndianMobileNumber(),
    usMobile: generateUSMobileNumber(),
  };
}

module.exports = {
  generateRandomNumber,
  generateRandomString,
  generateIndianMobileNumber,
  generateUSMobileNumber,
  generateEmail,
  generateEmployeeData,
};
