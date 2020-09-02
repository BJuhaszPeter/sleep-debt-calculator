/*
--------------Sleep Debt Calculator---------------

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

// determining how many hours of sleep you got each night of the week.

const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  }
};

// get the total sleep hours that you actually slept

const getActualSleepHours = () =>
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// calculate sleep debt

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('more sleep than needed');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};



calculateSleepDebt();
