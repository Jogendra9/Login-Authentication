document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'welcome.html';
    } else {
        
        alert("user not found plz register");
    }
});
