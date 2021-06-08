
function login(e) {
    e.preventDefault;
    let frm = document.getElementById('frm');
    let email = frm.email.value;
    let password = frm.password.value;

    let data = localStorage.getItem('data');
    data = JSON.parse(data)
    
    let check;
    for (let key in data) {
        if (email == data[key].email && password == data[key].password) {
            check = true;
            break;
        }
        else {
            check = false;
            
        }
    }
    if (check) {
        window.location.href = '/home/ram/Desktop/ninjas2/week12/DSA/mov1/home.html';
    }
    else {
        alert('Invalid Credential');
    }

}