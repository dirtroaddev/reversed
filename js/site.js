

//get the values from the string
//controller function
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}

//reverse the string
//logic function
function reverseString(userString) {
    let revString = "";

    //reverse the string using a for loop
    for(let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    return revString;
}


//display the message to the user
//view function
function displayString(revString) {
    //write to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}