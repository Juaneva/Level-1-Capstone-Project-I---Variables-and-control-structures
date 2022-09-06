// 1. user is asked what metric they are using.
// 2. user inputs the temperature in their metric.
// 3. user is asked what metric they want to convert it to.
// 4. output the answer like this: "-273°C is 0K."


let startMetric = prompt("What metric would you like to convert from: C, F or K? ")
let num1 = prompt ("What is the temperature in your chosen Metric? ")
let convertTo = prompt("What metric would you like to convert to: C, F or K? ")

var Celcius = "C"
var Farenheit = "F"
var Kelvin = "K"


// CELCIUS CONVERTER

// Formulas from Celcius to Farenheit and Kelvin
let cToC = num1
let cToF = (num1 * 9/5 + 32)
let cToK = (num1 * 1 + 273.15)


//Celcius to Celcius
if ((startMetric === Celcius) && (convertTo === Celcius))  
    if (num1 > 100) {                                                   // nested if statemement when condition is true
        console.log(num1 + "°" + convertTo + " is boiling!")      
    }
    else if (num1 < -273) {
        console.log(num1 + "°" + convertTo + " is below absolute zero!")
    }
    else if (num1) {
        console.log(num1 + "°" + convertTo + " is OK!")
}

//Celcius to Farenheit
if ((startMetric === Celcius) && (convertTo === Farenheit))
    if ( cToF > 212) {
       console.log(cToF + "°" + convertTo + " is boiling!")
    }
    else if (cToF < -460) {
        console.log(cToF + "°" + convertTo + " is below absolute zero!")
    }
    else if (cToF) {
        console.log(cToF + "°" + convertTo + " is OK!")
    }


//Celcius to Kelvin
if ((startMetric === Celcius) && (convertTo === Kelvin)) 
    if (cToK > 373) {
      console.log(cToK + "°" + convertTo + " is boiling!")
    }
    else if (cToK < 0) {
      console.log(cToK + "°" + convertTo + " is below absolute zero!")
    }
    else  {
    console.log(cToK + "°" + convertTo + " is OK.")
}
  

// FARENHEIT CONVERTER

// Formulas from Farenheit to Celcius and Kelvin
let fToF = num1
let fToC = ((num1 - 32) * 5/9)
let fToK = ((num1 * 1 + 459.67) * 5/9)


//farenheit to Farenheit
if ((startMetric === Farenheit) && (convertTo === Farenheit))  
    if (num1 > 212) {                                                   // nested if statemement when condition is true
        console.log(num1 + "°" + convertTo + " is boiling!")      
    }
    else if (num1 < -460) {
        console.log(num1 + "°" + convertTo + " is below absolute zero!")
    }
    else if (num1) {
        console.log(num1 + "°" + convertTo + " is OK!")
}

//Farenheit to Celcius
if ((startMetric === Farenheit) && (convertTo === Celcius))
    if ( fToC > 100) {
       console.log(fToC + "°" + convertTo + " is boiling!")
    }
    else if (fToC < -273) {
        console.log(fToC + "°" + convertTo + " is below absolute zero!")
    }
    else if (fToC) {
        console.log(fToC + "°" + convertTo + " is OK!")
    }


//Farenheit to Kelvin
if ((startMetric === Farenheit) && (convertTo === Kelvin)) 
    if (fToK > 373) {
      console.log(fToK + "°" + convertTo + " is boiling!")
    }
    else if (fToK < 0) {
      console.log(fToK + "°" + convertTo + " is below absolute zero!")
    }
    else  {
    console.log(fToK + "°" + convertTo + " is OK.")
}
  

// KELVIN CONVERTER

// Formulas from Kelvin to Celcius and Farenheit
let kToK = num1
let kToC = (num1 * 1 - 273.15)
let kToF = (num1 * 9/5 - 459.67)

//Kelvin to Kelvin
if ((startMetric === Kelvin) && (convertTo === Kelvin))  
    if (num1 > 373) {                                                   // nested if statemement when condition is true
        console.log(num1 + "°" + convertTo + " is boiling!")      
    }
    else if (num1 < 0) {
        console.log(num1 + "°" + convertTo + " is below absolute zero!")
    }
    else if (num1) {
        console.log(num1 + "°" + convertTo + " is OK!")
}

//Kelvin to Celcius
if ((startMetric === Kelvin) && (convertTo === Celcius))
    if (kToC > 100) {
       console.log(kToC + "°" + convertTo + " is boiling!")
    }
    else if (kToC < -273) {
        console.log(kToC + "°" + convertTo + " is below absolute zero!")
    }
    else if (kToC) {
        console.log(kToC + "°" + convertTo + " is OK!")
    }


//Kelvin to Farenheit
if ((startMetric === Kelvin) && (convertTo === Farenheit)) 
    if (kToF > 212) {
      console.log(kToF + "°" + convertTo + " is boiling!")
    }
    else if (kToF < -460) {
      console.log(kToF + "°" + convertTo + " is below absolute zero!")
    }
    else  {
    console.log(kToF + "°" + convertTo + " is OK.")
}
  