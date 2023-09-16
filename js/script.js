// cancellatio of todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

//click on x to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13) {

        //extracting the new todo entered
        var newTodo = $(this).val();

        //to clear the input after pressing the enter key
        $(this).val("")

        //create a new li and add it to the todo list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>")
    };
});

//toggling the plus icon to hide or shoe add todo
$(".fa-plus").click(function(){
    $("input[type = 'text']").fadeToggle()
});