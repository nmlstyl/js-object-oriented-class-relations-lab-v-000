let store = {drivers: [], passengers: [], trips: []};
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(
      t => t.driverId === this.id
    )
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }

}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(
      t => t.passengerId === this.id
    )
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId
    store.trips.push(this)
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
  }

  passenger(){
    return store.passengers.find(
      p => p.id === this.passengerId
    )
  }

  driver(){
    return store.drivers.find(
      d => d.id === this.driverId
    )
  }
}
