var passContainer = document.getElementById('passCont');
var formBtn = document.getElementById('formButton');
var photos = document.getElementById('photos');
var hello = document.getElementById('h1')
var demo = document.getElementById('demo')

function validate()
{
    if(document.getElementById("text1").value == "test"
       && document.getElementById("text2").value == "test" )
    {
        alert( "validation succeeded" );
        passContainer.style.display = "none";
        passContainer.style.opacity = "0";
        photos.style.display = "flex";
        photos.style.opacity = "1";
        hello.style.display = "block";
        hello.style.opacity = "1";
    }
    else
    {
        alert( "validation failed" );
    }
}

formBtn.addEventListener('click', function(){
    validate();
});


function showLogin() {
    passContainer.style.display = "block";
    passContainer.style.opacity = "1";
}

window.onload = setTimeout(function() {
    showLogin();
}, 2000);

function myFunction() {
    document.getElementById("demo").innerHTML = Date();
}














