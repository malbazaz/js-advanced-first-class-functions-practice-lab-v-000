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
const driver1 = driver;
 driver.sort(function(a,b){
  return a.revenue - b.revenue

  // for(const key in driver){
  //   if(key === "revenue"){
  //     a[key]-b[key];
  //   }
  // }
  })
  return driver1;
}

function driversByName(driver){
  return driver.sort(function(a,b){
  for(const key in driver){
    if(key === "name"){
       a[key].localCompare(b[key])
    }
  }
  })
}

function totalRevenue(driver){
  const reduceRev = function(){
    for(const key in driver){
      if (key === "revenue"){
        return key[driver];
      }
    }
  }
  return driver.reduce(reduceRev,[])
}

function averageRevenue(driver){
return totalRevenue(driver)/driver.length;
}
