const {doTheLaundry} = require('./laundry.js');

//In case that ramdomChoice in doTheLaundry is true and the function is resolved, this function is next.*
const onFulfill = () => {
    setTimeout(() => {
        console.log(`Laundry's ready. Everything is super clean.`);
    }, 2000);
   
};

//If randomChoice in doTheLaundry is false, this function is next.*
const onReject = (rejectReason) => {
    console.log(rejectReason);
};

//Variable for param1
const checkSoup = doTheLaundry('Vanish Ultra White');

//* In here.
Promise.resolve(checkSoup)
.then(onFulfill)
.catch(onReject)