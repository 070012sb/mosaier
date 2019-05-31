$('.bn').on("click", function () {  
    axios({
        method: 'get',
        url: 'http://localhost/mosaier/php/signup.php',
        data: {
            uname: $('.uname').val(),
            upwd: $('.password').val()
        }
    }).then(function (data) {
        alert(data.info);
        if(data.stata == 1){
            location.href="http://localhost/mosaier/login.html";
        }
    }).catch(function(info){
        console.log(info)
    })
})