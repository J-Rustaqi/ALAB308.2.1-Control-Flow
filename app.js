/*
Part 1: Growing Pains
Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
Here is the information you have been given:
The area in which the plants are contained is circular, with a radius of 5 meters.
The formula for calculating the area of a circle is PI multiplied by the radius, squared:
const PI = 3.1415;
const area = PI * radius * radius;
Each plant requires a minimum space of 0.8 square meters.
The area is starting with 20 plants.
The plants double in number every week.
Using this information, your objectives are to:
Predict the plant growth after a specific number of weeks.
Implement control flow to make decisions on whether the plants should be:
Pruned, to stop them from exceeding the capacity of the garden.
This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
Monitored, if they are growing at an acceptable rate.
This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
Planted, if there is room to plant more plants.
This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

Part 2: Thinking Bigger
The conservation area in which the garden is located has multiple other gardens. 
Using the logic you have already created, determine:
The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
If the space remained circular, what would be the radius of this expanded garden?

*/



const PI = 3.1415;
const radius = 5;                                       //radius of the garden in meters
const area = PI * radius * radius;                      // to find the area of the garden
const minSpaceForPlant = 0.8;                           // minimum space for each plant in square meters
const maxCapacityOfGarden = area / minSpaceForPlant;    // maximum capacity of garden

let startingPlants = 20;                                // The starting number of plants

for (let weeks = 1; weeks <= 3; weeks++) {              //checking growth in week 1, 2 and 3
    let numberOfPlants = startingPlants * (2 ** weeks); // plants getting double week 1, 2, 3
    let percentageCapacity = (numberOfPlants / maxCapacityOfGarden) * 100; // need to fine the percentage of max capacity

    let message;
    if (percentageCapacity > 80) {
        message = "Prune, it exceeded 80% of garden capacity.";
    } else if (percentageCapacity >= 50 && percentageCapacity <= 80) {
        message = "Monitor, it is between 50% and 80% of garden capacity.";
    } else {
        message = "Plant more, it is less than 50% of garden capacity.";
    }

    console.log(`Week ${weeks}:`);                           // this prints the weeks
    console.log(`  Number of plants: ${numberOfPlants}`);    // this prints number of plants which doubled every week
    console.log(`  My advice: ${message}`);                  // this tells if got more space to plant or prune some
    console.log(`  Percentage of max capacity: ${percentageCapacity}%`); // this tells how percentage of area covered
}