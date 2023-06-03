//EVENT HANDLERS
function onTexAreaInput(e)
{
    caller = e.target || e.source;

    caller.style.height = "";
    caller.style.height = caller.scrollHeight + 5+"px";
}

function onContactMeClick()
{
    document.getElementById("contactForm").scrollIntoView(); 
    document.getElementById("emailAddress").focus();
}

function sendEmail()
{
    //get info
    const contactForm = document.getElementById("contactForm-form");
    const emailAddress = document.getElementById("emailAddress")
    const messageBox = document.getElementById("messageBox");

    const email = emailAddress.value;
    const message = messageBox.value;

    //validation
    if(message.trim() == ""){
        alert("Message field can't be empty");
        messageBox.focus();
        return;
    }

    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailRegex))
    {
        alert("Please provide a valid email address");
        email.focus();
        return;
    }

    //send email
    let status = Email.send({
        Host : "smtp.elasticemail.com",
        Username : "devemailservice5@gmail.com",
        Password : "37E2D37B37F140BB380125A82403F9C1CCB5",
        To : 'wissenschaftecht@gmail.com',
        From : "devemailservice5@gmail.com",
        Subject : email + " through: wissenss.github.io/",
        Body : message
    }).then(
        message => {
            if (message == "OK"){
                //in success show modal
                const modal = new bootstrap.Modal(document.getElementById('successModal'), {});
                modal.show();

                emailAddress.value = "";
                messageBox.value = "";
            }
            else
            {
                alert(message);
            }
        }
    );
}

//GRAPHIC COMPONENTS
function drawCard(project_json)
{
    const section = document.getElementById("projects-list");

    //dom objects
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