<?php
    header('content-type:text/html;charset="utf-8"');
    error_reporting(0);

    $news = array(
        array('title'=>'习近平纵论金砖国家合作之道','time'=>'2018.7.28'),
        array('title'=>'习主席到访的这个国家','time'=>'2018.7.28'),
        array('title'=>'习近平论“公与私” 习近平论优秀年轻干部','time'=>'2018.7.28'),
        array('title'=>'IMF发布中国经济报告：中国经济继续表现强劲','time'=>'2018.7.28'),
        array('title'=>'长春长生生产狂犬病疫苗案调查取得重大进展','time'=>'2018.7.28'),
        array('title'=>'越南台企获准挂"青天白日满地红旗" 台商这样感叹','time'=>'2018.7.28'),
        array('title'=>'女子首次坐飞机 误把应急门当厕所门被拘留10天','time'=>'2018.7.28'),
        array('title'=>'北大45%专硕生自行解决住宿?校方:了解后回复','time'=>'2018.7.28'),
        array('title'=>'北大45%专硕生自行解决住宿?校方:了解后回复','time'=>'2018.7.28'),
    );
    echo json_encode($news);
    ?>