let editor;

let url = window.location.href + "code/";
const csrf = document.getElementsByName('csrfmiddlewaretoken');
//console.log(csrf)

window.onload = function(){
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/one_dark");
    editor.session.setMode("ace/mode/python");
}

//This fuction will monitor the languages inputed

function changeLanguage(){
    let language = $("#languages").val();

    if(language == 'c'){
        editor.session.setMode("ace/mode/c_cpp");
    }
    else if(language == 'py'){
        editor.session.setMode("ace/mode/python");
    }
    else if (language == 'js'){
        editor.session.setMode("ace/mode/javascript");
    }
}


//Here we run the code 

function executeCode(){

    let output = document.getElementById('out1');

    $.ajax({
        type:'POST',
        url:url,
        data: {
            'csrfmiddlewaretoken':csrf[0].value,
            'language':$("#languages").val(),
            'code':editor.getSession().getValue()
        },
        success: function(response){
            console.log(response)
            //$("#output").text(response)
            output.innerHTML = response.result4
        },

    })

}