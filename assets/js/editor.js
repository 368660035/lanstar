$(function() {
    if($('#wmd-button-row').length>0){
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-hide-button" style="" title="插入隐藏内容"><i class="far fa-eye-slash"></i></li>');
        $('#wmd-button-row').append('<li class="wmd-spacer wmd-spacer1"></li><li class="wmd-button" id="wmd-owo-button" style="" title="插入表情"><span class="OwO"></span></li>');
        new OwO({
            logo: '<i class="far fa-grin-alt"></i>',
            container: document.getElementsByClassName('OwO')[0],
            target: document.getElementById('text'),
            api: '../usr/themes/lanstar/assets/owo/OwO_02.json',
            position: 'down',
            width: '400px',
            maxHeight: '250px'
        });
        $(document).on('click','#wmd-hide-button',function() {
            myField = document.getElementById('text');
            insertAtCursor(myField, '\n[hide]\n\n[/hide]\n');
        });
    }
});
