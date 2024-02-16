document.addEventListener("DOMContentLoaded", (event) => {
  const currentDate = new Date();
  const month = currentDate.getMonth();

  if (month != 12) //hide the snowflakes animation if not in dicember
  {
    let snowflakesList = document.getElementsByClassName("snowflake");
    
    Array.from(snowflakesList).forEach((snowflake) => {
      snowflake.style = "display:none";
    });
  }
});