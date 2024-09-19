let isStatus = document.querySelector('h5');
let remove = document.querySelector('#remove');
let add = document.querySelector('#add');
let check = 0;

add.addEventListener('click', function () {
    if (check == 0) {
        add.innerHTML = "Requet Sent";
        add.style.color = "yellow";
        remove.innerHTML = "Cancel Request";
        remove.addEventListener('click', function () {
            remove.innerHTML = "Request Cancelled";
            remove.style.color = "black";
            add.innerHTML = "Add Back";
            // check=1;
        })
    }

})
remove.addEventListener("click", function (e) {
    if (e.target.id === "remove" && remove.innerHTML !== "Cancel Request") {
        remove.innerHTML = "Removed";
        remove.style.color = "red";
        remove.style.width = "100%";
        add.remove(add);
    }

});

