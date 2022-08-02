const buttons =  document.querySelectorAll('.btnOption');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('clikc')
        let myEvent = button.dataset['command'];
        
        //document.execCommand(myEvent, false, null);

        if(myEvent === 'createLink'){
            let url = prompt('Insert Link Here');
            document.execCommand(myEvent, false, url);
        }
        else if(myEvent === 'formatBlock'){
            let formattingValue = button.dataset['block'];
            document.execCommand(myEvent, false, formattingValue);
        }
        else{
            document.execCommand(myEvent, false, null);
        }

    });
});