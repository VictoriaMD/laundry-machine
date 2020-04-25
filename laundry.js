//First, create a function with the task you want it to complete or reject.
const doTheLaundry = (param1) => {
    console.log(`Checking if there is enough ${param1} in compartment...`);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(randomChoice()) {
              console.log(`There is enough ${param1} in compartment. Starting laundry.`);
              resolve(param1);
            } else {
              reject(`Error: There is not enough ${param1} in compartment.`);
            }
        }, 1000);
    });
};

module.exports = {doTheLaundry};

//This function is to choose randomly if there is enough param1.
function randomChoice() {
    return (Math.random() > .2);
};