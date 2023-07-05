let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 18;

if (registeredEarly === true && runnerAge >= 18) {
    raceNumber += 1000;
} else {
    console.log('');
}

if (registeredEarly && runnerAge > 18) {
    console.log(`${raceNumber}, you will race at 9:30 A.M.`)
} else if (!registeredEarly && runnerAge > 18) {
    console.log(`${raceNumber}, you will race at 11A.M.`)
} else if (runnerAge < 18) {
    console.log(`${raceNumber}, you race will begin at 12:30 P.M.`)
} else {
  console.log(`${raceNumber}, Please go and see the registration desk!`)
}