let editor;

window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/one_dark");
}

let languages = document.getElementById('id_language');

languages.addEventListener('change', ()=>{

    let language = $("#id_language").val();

    if(language == '2'){
        editor.session.setMode("ace/mode/c_cpp");
    }
    else if(language == '1'){
        editor.session.setMode("ace/mode/python");
    }
    else if (language == '3'){
        editor.session.setMode("ace/mode/javascript");
    }

});

const csrf = document.getElementsByName('csrfmiddlewaretoken');

//Here we will save the file

$(document).on('submit','#saveCode', function(e){

    e.preventDefault();

    $.ajax({
        type:'POST',
        //url:"{% url 'save' %}",
        url: '',
        data:{

            'csrfmiddlewaretoken':csrf[0].value,
            'fileName':$('#id_code_name').val(),
            'language':$("#id_language").val(),
            'code':editor.getSession().getValue()
        },
        success: function(response){
            console.log(response)
        },
        error: function(error){
            console.log(csrf)
            console.log(error)
        }
    });

});