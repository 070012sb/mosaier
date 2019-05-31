<?php
    header("content-type:text/html;charset=utf8");
    include('public.php');
    $uname = $_GET['uname'];
    $upwd = $_GET['upwd'];
    $sql = "select * from mosaierpeople where uname = '$uname'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);
    if($arr){
        if($upwd == $arr['upassword']){
            echo json_encode(array(
                'stata' => '1',
                'info' => '成功'
            ));
        }else{
            echo json_encode(array(
                'stata' => '2',
                'info' => '失败'
            ));
        }
    }else{
        echo json_encode(array(
            'stata' => '2',
            'info' => '用户名不存在'
        ));
    }

?>