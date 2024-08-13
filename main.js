const app = Vue.createApp({
  data() { 
    return {}
  }
})

const navOptions = document.querySelector("nav .options");

function toggleNav()
{
  navOptions.classList.toggle("hidden");
}

function hideNav()
{
  navOptions.classList.add("hidden");
}

function scrollToSelector(selector)
{
  const element = document.querySelector(selector);

  element.scrollIntoView({
    behavior: 'smooth'
  });
}