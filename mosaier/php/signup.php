<?php
    header("content-type:text/html;charset=utf8");
    include('public.php');
    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];
    $sql = "select * from mosaierpeople where uname = '$uname'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
    if($arr){
            echo json_encode(array(
                'stata' => '0',
                'info' => '用户名重复'
            ));
        }else{
            echo json_encode(array(
                'stata' => '1',
                'info' => '注册成功'
            ));
            $insert = "insert into mosaierpeople (uname,upassword) values ('$uname','$upwd')";
            mysqli_query($connect,$insert);
        }

?>