function watchform() {
    let posttodo = document.getElementById("posttodo");
    let cleartodo = document.getElementById("cleartodo");
    let marktodo = document.getElementById("marktodo");
    let deletetodo = document.getElementById("deletetodo");
    let newtodo = document.getElementById("newtodo");
    let listdetails = document.getElementById("listdetails")
    let listcheck = document.getElementById("listcheck")


    posttodo.addEventListener("click", (event) => {
        event.preventDefault();
        var div = document.createElement("div");
        div.className = "divv";
        var todo = document.createTextNode(newtodo.value);
        div.appendChild(todo);

        var div2 = document.createElement("input");
        div2.type = "checkbox";
        div2.className = "check";

        if (newtodo.value === "") {
            listdetails.textContent = listdetails.textContent
        }
        else {
            listdetails.appendChild(div);
            listcheck.appendChild(div2);
            newtodo.value = ""
        }
    })


    marktodo.addEventListener("click", (event) => {
        event.preventDefault();
        function toggle() {
            checkboxes = document.getElementsByClassName("check")
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = true;
            }
        }

        toggle()
    })

    cleartodo.addEventListener("click", (event) => {
        event.preventDefault();
        function toggle() {
            checkboxes = document.getElementsByClassName("check")
            for (var i = 0, n = checkboxes.length; i < n; i++) {
                checkboxes[i].checked = false;
            }
        }

        toggle()
    })

    deletetodo.addEventListener("click", (event) => {
        event.preventDefault();
        location = location;
    })
}

watchform()