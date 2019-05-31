$('.btn').on("click", function () {  
    axios({
        method: 'get',
        url: 'http://localhost/mosaier/php/login.php',
        data: {
            uname: $('.uname').val(),
            upwd: $('.upassword').val()
        }
    }).then(function (data) {
 if($('.obtn').is(':checked')){
     setCookie('zhanghao',$('.uname').val(),7);
     setCookie('mima',$('.upassword').val(),7)
 }
        alert(data.info);
        if(data.stata == 1){
            location.href="http://localhost/mosaier/mosaier.html";
        }
    }).catch(function(info){
        console.log(info)
    })
})
if(document.cookie){
    $('.uname').val(getCookie('zhanghao')) 
    $('.upassword').val(getCookie('mima')) 
}