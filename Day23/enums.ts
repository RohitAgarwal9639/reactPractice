enum WetherConditions {
    Sunny,
    Cloudy,
    Rainy,
}
// by default value of Sunny is 1 Cloudy is 2 Rainy is 3

console.log(WetherConditions.Sunny);//0
console.log(WetherConditions.Cloudy);//1
console.log(WetherConditions.Rainy);//2

enum WetherConditions1 {
    Sunny='sunny',
    Cloudy='cloudy',
    Rainy='rainy',
}