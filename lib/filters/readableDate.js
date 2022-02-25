// Use: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

module.exports = (postdate) => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let day = postdate.getDate();
  let month = months[postdate.getMonth()];
  let year = postdate.getFullYear();

  return month + " " + day + " — " + year;
}
