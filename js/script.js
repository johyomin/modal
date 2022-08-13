$(document).ready(function () {
    // 안내창 기능
    // 추가기능 : 스크롤바 없애기
    $('html').css('overflow', 'hidden');

    let modalWrap = $('.modal-wrap');
    let modalClose = $('.modal-close');
    modalClose.click(function () {
        modalWrap.stop().fadeOut(100);
        // 추가기능 : 스크롤바 살리기
        $('html').css('overflow', 'auto');
    });

    let modalMain = $('.modal-main');
    // 내용 배경 클릭
    modalMain.click(function (event) {
        // 클릭 정보 전달 막기
        event.stopPropagation();
    });
    // 전체 배경 클릭
    modalWrap.click(function () {
        modalWrap.stop().fadeOut(100);
        // 추가기능 : 스크롤바 살리기
        $('html').css('overflow', 'auto');
    });

});