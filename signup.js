

function signup(e) {
    e.preventDefault;
    let frm = document.getElementById('frm');
    let name = frm.name.value;
    let contact = frm.contact.value;
    let email = frm.email.value;
    let password = frm.password.value;
    if (name == '' || contact == '' || email == '' || password == '') {
        alert('Empty Credential')
    }
    else {
        let data = {
            name,
            contact,
            email,
            password
        }
        let arr;
            arr = localStorage.getItem('data');
        if (arr == null) {
            arr = [];
        }
        else {
            arr = JSON.parse(arr)
        }
        arr.push(data);
        localStorage.setItem('data',JSON.stringify(arr));
    }
}
function login() {
    window.location.href = "/home/ram/Desktop/ninjas2/week12/DSA/mov1/login.html"
}
function home() {
    window.location.href = "/home/ram/Desktop/ninjas2/week12/DSA/mov1/home.html"
}

