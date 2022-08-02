Dropzone.autoDiscover = false;


const myDropzone = new Dropzone("#my-dropzone", {
    autoProcessQueue: false,
    maxFiles: 2,
    maxFilesize: 2,
    acceptedFiles: '.png, .jpg',

})

 $("#my-dropzone").css('border','2px solid blue')