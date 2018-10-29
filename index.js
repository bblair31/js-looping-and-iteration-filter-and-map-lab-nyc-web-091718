function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let driversOver = driversWithRevenueOver(drivers, revenue);
  return driversOver.map(function (driver) {
    return driver.name;
  });
}

function exactMatch(drivers, matchingObject) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matchingObject) {
      matches = driver[key] === matchingObject[key];
    }
    return matches
  });
}

function exactMatchToList(drivers, matchingObj) {
  let matchingDrivers = exactMatch(drivers, matchingObj)

  return matchingDrivers.map(function (driver) {
    return driver.name;
  });
}
