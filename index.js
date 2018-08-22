// Code your solution in this file!
function logDriverNames(driver){
  return driver.forEach(function(e){
    return console.log(e.name);
  });
}

function logDriversByHometown(driver, location){
return driver.forEach(function(e){
  if (e.hometown == location){
    return console.log(e.name);
  }
})
}

function driversByRevenue(driver){

let newArray =  driver.map(function(b){
  return b.revenue
  })
return newArray.sort(function(a,b){
  return a-b;
  })
}
// return driver.forEach(function(d){
//   return d.revenue;
// })
