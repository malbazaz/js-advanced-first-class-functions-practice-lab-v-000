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
   a-b;
  })
  const sortOut = function(a,b){
    return a - b;
  }
  driver.sort(sortOut(a,b))
}
