# Mars Climate Orbiter Challenge

## Debugging Guide

This project aims to debug and improve a piece of JavaScript code that calculates various parameters related to a vehicle's motion. The debugging guide outlines the following objectives:

1. **Make the code more readable**: Enhance code readability by organizing and simplifying the structure.

2. **Identify and rectify calculation errors**: Correct any errors in the calculations to ensure accurate results.

3. **Ensure calculations are robust against incorrect inputs**: Implement checks to ensure that the calculations handle incorrect inputs, such as wrong units of measurement or missing parameters, gracefully.

## Description

The provided JavaScript code calculates parameters such as new velocity, new distance, and remaining fuel based on given initial conditions like velocity, acceleration, time, distance, fuel, and fuel burn rate. It includes a function `calculatesNewVelocity()` to compute the new velocity.

## Improvements Made

1. **Refactored Code**: Organized the code structure to improve readability and maintainability.

2. **Corrected Calculations**: Fixed calculation errors to ensure accurate results.

3. **Added Input Checks**: Implemented checks for input types and units of measurement to make the calculations robust against incorrect inputs.

## Usage

To use this code:

1. Ensure you have Node.js installed on your system.
2. Copy the provided JavaScript code into a `.js` file.
3. Run the file using Node.js to see the corrected results.

Example:

```bash
node filename.js


#### Initial Parameters

- **Initial Velocity (`vel`)**: The starting speed of the spacecraft, 10,000 km/h.
- **Acceleration (`acc`)**: The spacecraft's acceleration, 3 m/s².
- **Time (`time`)**: The duration of the calculation, 3,600 seconds (equivalent to 1 hour).
- **Initial Distance (`d`)**: The starting distance from the reference point, 0 km.
- **Initial Fuel (`fuel`)**: The starting amount of fuel, 5,000 kg.
- **Fuel Burn Rate (`fbr`)**: The rate at which fuel is consumed, 0.5 kg/s.

##### Expected Corrected Results

- **New Velocity**: Approximately 48880 km/h after correction.
- **New Distance**: Approximately 10000 km after correction.
- **Remaining Fuel**: Approximately 3,200 kg after correction.

#### Your Task

1. **Identify and Understand Errors**: Analyse the provided functions to determine how unit mismatches and parameter misalignments cause incorrect results.
2. **Refactor and Correct**: Modify the functions to handle parameters more effectively, incorporating object destructuring for clarity and implementing necessary unit conversions.

#### Solution Approach

- Use object destructuring in function parameters for better clarity.
- Implement accurate unit conversions within the functions.
- Ensure the corrected functions address the issues of unit mismatches and parameter clarity.

#### Debugging Guide

1. Enhance code readability for easier debugging.
2. Identify and correct calculation errors.
3. Improve the robustness of calculations. If incorrect units are used or other errors are detected, the code should notify the user instead of producing an incorrect result.
```
