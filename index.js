// // Code your solution here:
// function driversWithRevenueOver(drivers, revenue) {
//   let driverArray = drivers.filter(function(driver){
//     return driver.revenue > revenue;
//   });
//   return driverArray
// }

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue >revenue)}

function driverNamesWithRevenueOver(drivers, revenue){
  return driversWithRevenueOver(drivers, revenue).map(
    driver => driver.name)}

function exactMatch(drivers, match){
  return drivers.filter(function(driver){

    // ??????????
   let matches = false;
   for (const key in match){
     matches = driver[key] === match[key];
   }
   
   return matches;
 });
}

function exactMatchToList(drivers, matches){
  return exactMatch(drivers, matches).map(
    driver => driver.name)}
