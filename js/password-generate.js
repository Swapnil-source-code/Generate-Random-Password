const passwordBox = document.getElementById('password');
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+=-?><`";

const allChar = upperCase + lowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  
  while(lenght > password.length)
    password += allChar[Math.floor(Math.random() * allChar.length)];
  passwordBox.value = password;

}

// const copyPassword = () => {
//   passwordBox.select();
//   document.execCommand('copy');
// }

const copyPassword = () => {
  const passwordBox = document.getElementById('password'); 
  passwordBox.select();
  document.execCommand('copy');
};

