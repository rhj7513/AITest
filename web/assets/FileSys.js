function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imagePreview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


$("#ex_file").change(function () {
    readURL(this);
    let image = document.querySelector('#imagePreview')
    while (image.complete) {
        setTimeout(predict,20);
        break;
    }
});