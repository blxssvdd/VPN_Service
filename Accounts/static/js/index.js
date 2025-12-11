    var count = 0
    document.querySelector(".myButton").addEventListener("click", function() {
        var messageDiv = document.querySelector(".message")
        messageDiv.innerHTML = `Додали нове помідомлення: ${count}`;
        messageDiv.style.color = "black"
        count += 1;
    })
    


    //document.querySelector(".myButton").addEventListener("click", function() {
       // alert("БОМБОКЛАТ!!!!")
    //})