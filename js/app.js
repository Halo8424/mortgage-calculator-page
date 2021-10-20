
let state = {

    price: document.querySelectorAll('[name="price"]')[0].value,
    loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
    down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
    interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
    property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
    home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
    hoa: document.querySelectorAll('[name="hoa"]')[0].value
};

console.log(state.price);
console.log(state.loanYears);
console.log(state.downPayment);
console.log(state.interestRate);
console.log(state.homeInsurance);
console.log(state.hoa);