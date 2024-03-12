$(document).ready(function(){
    $('#form').submit(function(event){
        event.preventDefault();

        var name = $('#name_input').val();
        var surname = $('#username_input').val();
        var email = $('#email_input').val();
        var phone = $('#phone_input').val();
        var pass = $('#password_input').val();
        var passrep = $('#passwordrepeat_input').val();
        var check = $('#invalidCheck').val();
        var msg = $('#message').html('Пожалуйста, заполните все поля');

        if (passrep != pass) {
            $('#message').html('Пароли не совпадают');
            console.log('no');
        }

        // Проверка на заполненность полей
        if(name == '' || surname == '' || email == '' || phone == '' || pass == '' || passrep == '' || check == ''){
            window.scrollTo(10000, 10000);
            div.append(msg);
            // $('#message').html('Пожалуйста, заполните все поля');
            return;
        } else {
            window.scrollTo(0, 0);
            $('#message_success').html('Вы зарегистрированы');
            msg.remove();
            console.log('true');
            $("#form")[0].reset();
            location="../login.html";
        }

        // AJAX запрос
        // $.ajax({
        //     url: $(this).attr('action'),
        //     type: $(this).attr('method'),
        //     data: $(this).serialize(),
        //     success: function(response){
        //         // Показать сообщение об успешной отправке
        //         window.scrollTo(0, 0);
        //         $('#message_success').html('Вы зарегистрированы');
        //         console.log('true');
        //         $("#form")[0].reset();

        //     },
        //     error: function(xhr, status, error){
        //         // Показать сообщение об ошибке
        //         $('#message').html('Произошла ошибка: ' + error);
        //     }
        // });
    });
});
