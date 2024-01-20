document.addEventListener("DOMContentLoaded", (event) => {
  console.log("wololo")

  const currentDate = new Date();
  const month = currentDate.getMonth();

  if (month != 11)
  {
    let snowflakesList = document.getElementsByClassName("snowflake");
    
    Array.from(snowflakesList).forEach((snowflake) => {
      snowflake.style = "display:none";
    });
  }
});