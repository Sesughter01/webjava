// // Functions are blocks of code statements that work together to perform a task

// // before es6 2015

// // function nameOfFunc(){
// // //   code

// // }

// // from es6 2015



// // const Bank_account = {
// //   account_name : "",
// //   account_number : "",
// //   bank : "Opay",
// //   account_balance: 0,
// //   bvn : "",
// //   email : "",
// //   phone: "",
// //   address: "",
// //   type:"",
// //   debit: function (debit_amount){
// //     return this.account_balance - debit_amount
// //   },
// //   credit: function (credit_amount){
// //     return this.account_balance + credit_amount
// //   },
// //   getAccountName: function (){

// //     return this.account_name;
// //   }


// // }
// const Bank_account = {
//   account_name : "",
//   account_number : "",
//   account_balance: 0,
//   bvn : "",
//   email : "",
//   phone: "",
//   address: "",
//   type:"",
//   debit: function (debit_amount){
//     return this.account_balance - debit_amount
//   },
//   credit: function (credit_amount){
//     return this.account_balance + credit_amount
//   },
//   getAccountName: function (){

//     return this.account_name;
//   }


// }
// // function createAccount(){
    
// //     let myKuda = Bank_account();
// //    let _name = prompt('Enter account name:');
// //    let bvn = prompt('Enter bvn:');
// //    let email = prompt('Enter email:');
// //   let  phone = prompt('Enter phone number:');
// //   let  bal= prompt('Enter account balance:');
// //   let  address = prompt('Enter address:');
// //  let   type = prompt('Do you want Savings or Current accont?:');

// //     myKuda.account_name = _name;
// //     myKuda.bvn = bvn;
// //     myKuda.email = email;
// //     myKuda.phone = phone;
// //     myKuda.account_balance = bal ? bal : 0;
// //     myKuda.address = address;
// //     myKuda.type = type;

// //     const jumbo = document.createElement('div');
// //     jumbo.append(`<h1>${myKuda.account_name}</h1>`);
// //     jumbo.append(`<h3>${myKuda.bvn}</h3>`);
// //     jumbo.append(`<h4>${myKuda.email}</h4>`);

// //     document.body.appendChild(jumbo)
// // }
// function createAccount(){
    
//     // let myKuda = Bank_account();
//    let _name = prompt('Enter account name:');
//    let bvn = prompt('Enter bvn:');
//    let email = prompt('Enter email:');
//   let  phone = prompt('Enter phone number:');
//   let  bal= prompt('Enter account balance:');
//   let  address = prompt('Enter address:');
//  let   type = prompt('Do you want Savings or Current accont?:');

//  Bank_account.account_name = _name;
//  Bank_account.bvn = bvn;
//  Bank_account.email = email;
//  Bank_account.phone = phone;
//  Bank_account.account_balance = bal ? bal : 0;
//  Bank_account.address = address;
//  Bank_account.type = type;

//     const jumbo = document.createElement('div');
//    const head = document.createElement('h1');
//    head.innerHTML = Bank_account.account_name;

//    const bvnElement = document.createElement('h3');
//    bvnElement.innerHTML = Bank_account.bvn;

//    const emailElement = document.createElement('h1');
//    emailElement.innerHTML =  Bank_account.email;
    
//    jumbo.append(head);
//    jumbo.append(bvnElement);
//    jumbo.append(emailElement);

//     document.body.appendChild(jumbo)
// }

// createAccount();

const logo = document.createElement('img');
logo.setAttribute('src','/images/logo.svg');
logo.style.maxWidth='100%';

// const myheader = document.getElementsByTagName('header');

header.append(logo);