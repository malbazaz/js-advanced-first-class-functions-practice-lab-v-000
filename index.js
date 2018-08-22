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
let driver1 = driver;
 return driver1.slice().sort(function(a,b){
return a.revenue - b.revenue

  // for(const key in driver){
  //   if(key === "revenue"){
  //     a[key]-b[key];
  //   }
  // }
  })
}

function driversByName(driver){
  return driver.slice().sort(function(a,b){
   return a.name.localeCompare(b.name)
  })
}

function totalRevenue(driver){

  const reduceRev = function(){
    driver.forEach(function(d){
            return d["revenue"];
                })
              }
      // if (d === "revenue"){
      //
      //   return driver[d]
      // }

    // for(const key in driver){
    //   if (key === "revenue"){
    //     return driver[key];
    //   }
    // }

let initial = 0;
return driver.reduce(reduceRev,initial){
  return reduceRev + initial;
}
}

function averageRevenue(driver){
return totalRevenue(driver)/driver.length;
}
