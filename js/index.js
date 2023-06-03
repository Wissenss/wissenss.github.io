//EVENT HANDLERS
function onTexAreaInput(e)
{
    caller = e.target || e.source;

    caller.style.height = "";
    caller.style.height = caller.scrollHeight + 5+"px";
}

function sendEmail()
{

    console.log("sendEmail called");

    //get the info
    const contactForm = document.getElementById("contactForm-form");
    const email = document.getElementById("emailAddress").textContent;
    const message = document.getElementById("messageBox").textContent;

    console.log("sendEmail called");

    //send the email
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "devemailservice5@gmail.com",
    //     Password : "cR?&Oph@wlp*go9oDI&W",
    //     To : 'wissenschaftecht@gmail.com',
    //     From : email,
    //     Subject : "wissenss.github.io/",
    //     Body : message
    // }).then(
    //   message => alert(message)
    // );
}

//GRAPHIC COMPONENTS
function drawCard(project_json)
{
    const section = document.getElementById("projects-list");

    //creating the elements
    const container = document.createElement("div");
    container.classList.add("project-card");

    const title = document.createElement("h4");
    title.textContent = project_json["name"];
    container.appendChild(title);

    const divider = document.createElement("hr");
    container.appendChild(divider);

    const description = document.createElement("p");
    description.textContent = project_json["description"];
    container.appendChild(description);

    const stackContainer = document.createElement("div");
    stackContainer.classList.add("stack");
    container.appendChild(stackContainer);

    const stackList = project_json["stack"];

    for(let i=0; i<stackList.length; i++)
    {
        let stack = document.createElement("img");
        stack.classList.add("icon-lg");
        
        switch(stackList[i])
        {
            case "python":
                stack.src = "./Assets/python-logo-gray.png";
                break;
            case "cpp":
                stack.src = "./Assets/cpp-logo-gray.png";
                break;
            case "csharp":
                stack.src = "./Assets/csharp-logo-gray.png";
                break;
            case "html":
                stack.src = "./Assets/html-logo-gray.png";
                break;
            case "css":
                stack.src = "./Assets/css-logo-gray.png";
                break;
            case "javascript":
                stack.src = "./Assets/html-logo-gray.png";
                break;
            default:
                break;
        }

        stackContainer.appendChild(stack);
    }

    section.appendChild(container);

    //behaviour
    container.addEventListener("click", (e)=>{
        window.open(project_json["link"], "blank");
    });

    container.addEventListener("mouseover", (e)=>{
        stackContainer.childNodes.forEach((element) => {
            element.src = element.src.replace("-gray", "-white");
        });
    });

    container.addEventListener("mouseleave", (e)=>{
        stackContainer.childNodes.forEach((element) => {
            element.src = element.src.replace("-white", "-gray");
        });
    });
}