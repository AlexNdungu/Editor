/*

Dropzone.autoDiscover = false;


const myDropzone = new Dropzone("#my-dropzone", {
    autoProcessQueue: false,
    maxFiles: 2,
    maxFilesize: 2,
    acceptedFiles: '.png, .jpg',

})

 $("#my-dropzone").css('border','2px solid blue')

*/


//Lets play with the custom dropzone

let inputZone = document.getElementById('custDropZone');

let dropPlace = document.getElementById('dropCustom');

let ptag = document.getElementById('ptag');

let images = document.getElementById('images');

dropPlace.addEventListener('dragover', e => {
    e.preventDefault()
})

var newList = [];

dropPlace.addEventListener('drop', e => {
    e.preventDefault();
    //console.log(e.dataTransfer.files)

    files = e.dataTransfer.files

    //console.log(files[0])


    if(e.dataTransfer.files.length){
        inputZone.files = e.dataTransfer.files;


        for(var i = 0; i < inputZone.files.length; i++)
        {
            newList.push(files.item(i));
        }

        console.log(newList)
        //console.log(e.dataTransfer.files.length)

        //items = inputZone.files

        /*
        const fileListArr = [...inputZone.files]
        fileListArr.splice(1, 1)
        console.log(fileListArr)

        */

        //const fileListArr = Array.from(inputZone.files)


        //const fileListArr = [...inputZone.files]


        //fileListArr.splice(0, 1)


        //console.log(fileListArr)
        
        //const fileReader = new FileReader();
        //fileReader.readAsDataURL(files[0]);

       for(var q =0; q < newList.length; q++){
            //console.log(items[q].value)

            //console.log(files)

            let lopItmem = newList[q]

            //var src = URL.createObjectURL(e.dataTransfer.files[q]);

            var src = URL.createObjectURL(lopItmem);

            //var src = URL.createObjectURL(new Blob(fileListArr))

            images.innerHTML += `<div class="singImg"><img src="${src}" alt=""></div>`;
            
        }

        let singImg = document.querySelectorAll('.singImg');

        for(var x= 0; x<singImg.length; x++){

            singImg[x].addEventListener('click', function(x){
                console.log(x)

                //const fileListArr = Array.from(inputZone.files)
                newList.splice(x, 1)
                console.log(newList)
                //const fileReader = new FileReader();
                //fileReader.readAsDataURL(files[0]);[]

                singImg[x].remove()

                //console.log(newList[0])

            }.bind(null, x));

            

        }

        

    }

})

