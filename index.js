// Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Declare a variable with const that is assigned an anonymous function.
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // This is an array containing two elements: the two functions that we previously defined.
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  const fareDoubler = createFareMultiplier(2); // This will double the fare.
  const fareTripler = createFareMultiplier(3); // This will triple the fare.
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };