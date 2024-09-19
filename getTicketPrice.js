function getTicketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age >= 13 && age <= 17) {
    return 15;
  } else {
    return 20;
  }
}


// Example usage
console.log(getTicketPrice(16)); 
