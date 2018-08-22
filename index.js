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

return driver.sort(function(a,b){
  for(const key in driver){
    if(key === "revenue"){
      return a[key]-b[key];
    }
  }
  })
}
// return driver.forEach(function(d){
//   return d.revenue;
// })
