$(function(){
    //リンクをクリックした時に動作する
    $('a[href^="#"]').click(function(){
        //リンクを取得
        let href= $(this).attr("href");
        //ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        //トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロール
        //600はスクロール速度で単位はミリ秒
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });
})