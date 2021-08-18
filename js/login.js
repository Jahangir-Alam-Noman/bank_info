// login page
document.getElementById('login_button').addEventListener
    ('click', function () {

        // get the email
        const userEmail = document.getElementById('user_email');
        const emailField = userEmail.value;


        // get the password
        const userPassword = document.getElementById('user_password');
        const passwordField = userPassword.value;

        if (emailField == 'sontan@gmail.com' && passwordField == 'secret') {
            window.location.href = 'banking.html';
        }
        // else {
        //     console.log("don't matched password & email");
        // }
        userEmail.value = '';
        userPassword.value = '';
    });