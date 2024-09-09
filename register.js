document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
       

    if (password !== confirmPassword) {
        alert("Password did't match")
        return;
    }

    const user = {
        name: name,
        username: username,
        password: password
    };

    localStorage.setItem(username, JSON.stringify(user));
    alert("Sucessfully Register");
    document.getElementById('registerForm').reset();
});
