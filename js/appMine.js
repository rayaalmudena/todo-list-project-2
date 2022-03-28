$(document).on("click", ".delete-item" , function() {
    $(this).parent().parent().remove();
});
$(document).on("click", ".complete-item" , function() {
    $(this).parent().parent().remove();
});