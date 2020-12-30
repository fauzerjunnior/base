$('body').on('click','.share-box .fa-facebook', function (e) {
    var myWindow = window.open('http://www.facebook.com/share.php?u=' + encodeURI($(this).parents('.share-box').attr('data-href')),'Compartilhe no Facebook','width=500,height=450');
});

$('body').on('click','.share-box .fa-linkedin', function (e) {
    var myWindow = window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURI($(this).parents('.share-box').attr('data-href') + '&title=' + document.title),'Compartilhe no Linkedin','width=500,height=450');
});

$('body').on('click','.share-box .fa-twitter', function (e) {
    var myWindow = window.open('http://twitter.com/intent/tweet?status=' + document.title + '+' + encodeURI($(this).parents('.share-box').attr('data-href')));
});        
$('body').on('click','.share-box .fa-google-plus', function (e) {
    var myWindow = window.open('https://plus.google.com/share?url=' + encodeURI($(this).parents('.share-box').attr('data-href')) ,'Compatilhe no Google Plus','width=500,height=450');
});

$('body').on('click', '.social-share .fa-pinterest', function (e) {
    var myWindow = window.open('http://pinterest.com/pin/create/button/?url='+encodeURI($(this).parents('.social-share').attr('data-href'))+'&media='+encodeURI($('.social-info span.img').text())+'&description='+encodeURI($('.social-info span.desc').text()),'Compatilhe no Pinterest','width=500,height=450');
});

$('body').on('click','.share-box .fa-envelope-o', function (e) {
    window.location.href = "mailto:?subject=" + document.title + "&body=Olhe esse conteúdo do site da Sculpere "+ $(this).parents('.share-box').attr('data-href');
});
