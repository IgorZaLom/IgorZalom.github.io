let timer = setTimeout(function(){
    $("#modal").slideDown(500, function(){
        $(this).addClass("modal-show");
    });
},50000);
$("#close, #zav, #btn-close").click(function(){
    $("#modal").slideUp(500, function(){
        $(this).removeClass("modal-show");
    });
});
