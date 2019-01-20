var slider = document.getElementById('myRange');
slider.oninput = function(){
    var myValue = slider.value;
    var myImage = document.getElementById('two');
    myImage.style.setProperty("width", myValue, "important");
    console.log(myValue);
}