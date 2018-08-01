const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const arrayOfStartLocation = this.journeys.map((journey) => {
      return journey.startLocation;
    });
    return arrayOfStartLocation;
};

Traveller.prototype.getJourneyEndLocations = function () {
const arrayOfEndLocations =this.journeys.map((journey) => {
  return journey.endLocation;
})
return arrayOfEndLocations;
};

Traveller.prototype.getModesOfTransport = function () {

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
