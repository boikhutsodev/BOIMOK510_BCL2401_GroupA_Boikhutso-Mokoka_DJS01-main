/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const props = {
  velocity: {
    value: 10000,
    measurement: "km/h",
  }, // velocity (km/h)
  acceleration: {
    value: 3,
    measurement: "m/s^2",
  }, // acceleration (m/s^2)
  time: {
    value: 3600,
    measurement: "s",
  }, // seconds (1 hour)
  distance: {
    value: 0,
    measurement: "km",
  }, // distance (km)
  fuel: {
    value: 5000,
    measurement: "kg",
  }, // remaining fuel (kg)
  fuelBurnRate: {
    value: 0.5,
    measurement: "kg/s",
  }, // fuel burn rate (kg/s)
};

// conversion rate

const conversionRate = props.time.value / 1000; // 1 hour

// Pick up an error with how the function below is called and make it robust to such errors
const calculatesNewVelocity = (props) => {
  // const { velocity, acceleration, time } = props;
  const {
    velocity: { value: velocity },
  } = props;
  const {
    acceleration: { value: acceleration },
  } = props;
  const {
    time: { value: time },
  } = props;

  const {
    velocity: { measurement: velocityMeasurement },
  } = props;
  const {
    acceleration: { measurement: accelerationMeasurement },
  } = props;
  const {
    time: { measurement: timeMeasurement },
  } = props;

  // Check for valid input types
  if (typeof velocity !== "number") throw Error("Velocity' is required!");
  if (typeof acceleration !== "number")
    throw Error("acceleration' is required!");
  if (typeof time !== "number") throw Error("time' is required!");

  // Check for correct units

  return velocity + acceleration * time * conversionRate;
};

const newDistance =
  props.distance.value * props.time.value + props.velocity.value; //calculates new distance
const remainingFuel =
  props.fuel.value - props.fuelBurnRate.value * props.time.value; //calculates remaining fuel
const newVelocity = calculatesNewVelocity(props); //calculates new velocity based on acceleration

// Output corrected results
console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
