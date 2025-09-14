function generatePassword(length, upper, lower, symbols, numbers) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const digits = "0123456789";
  const diffsymbols = "@!#$%^&*()_+-~?/";
  let allowedChars = "";
  let password = "";
  allowedChars += upper ? upperCase : "";
  allowedChars += lower ? lowerCase : "";
  allowedChars += symbols ? diffsymbols : "";
  allowedChars += numbers ? digits : "";
  if (length <= 0) {
    console.log("Password length must be atleast 1");
  }
  if (allowedChars.length === 0)
    console.log("At least 1 set of characters must be selected");
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[index];
  }
  return password;
}
const length = 12;
const upper = true;
const lower = true;
const symbols = true;
const numbers = true;
const password = generatePassword(length, upper, lower, symbols, numbers);
console.log(`Generate Password:${password}`);
