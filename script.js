function nextPage(e) {
    e.preventDefault();
    showTable();
}

//Function to clear the fields after submitting the form
function clearFields() {
    document.getElementById("NewYork").style.display = "none";
    document.getElementById("LosAngeles").style.display = "none";
    document.getElementById("Boston").style.display = "none";
    document.getElementById("Mumbai").style.display = "none";
    document.getElementById("Bangalore").style.display = "none";
    document.getElementById("Delhi").style.display = "none";
    document.getElementById("Montreal").style.display = "none";
    document.getElementById("Vancouver").style.display = "none";
    document.getElementById("Toronto").style.display = "none";
    document.getElementById("Manchester").style.display = "none";
    document.getElementById("Chelmsford").style.display = "none";
    document.getElementById("Birmingham").style.display = "none";
    document.getElementById("Paris").style.display = "none";
    document.getElementById("Bordeaux").style.display = "none";
    document.getElementById("Marseille").style.display = "none";

    document.getElementById("color").style.display = "none";
    document.getElementById("summary").style.display = "none";
    document.getElementsByName("color")[0].required = false;
}


//Function to show the table after submitting the form
function showTable() {


    var ele = document.getElementsByName('title');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            document.getElementById("title1").innerHTML = ele[i].value;
        }
    }

    document.getElementById("firstName1").innerHTML = document.getElementsByName("firstName")[0].value;
    document.getElementById("lastName1").innerHTML = document.getElementsByName("lastName")[0].value;
    document.getElementById("emailId1").innerHTML = document.getElementsByName("emailId")[0].value;
    document.getElementById("phoneNumber1").innerHTML = document.getElementsByName("phoneNumber")[0].value;
    document.getElementById("streetAddress11").innerHTML = document.getElementsByName("streetAddress1")[0].value;
    document.getElementById("streetAddress21").innerHTML = document.getElementsByName("streetAddress2")[0].value;
    document.getElementById("city1").innerHTML = document.getElementsByName("city")[0].value;
    document.getElementById("state1").innerHTML = document.getElementsByName("state")[0].value;
    document.getElementById("zipcode1").innerHTML = document.getElementsByName("zipcode")[0].value;
    var hear = "";
    if (document.getElementById("check1").checked) hear = hear + "facebook ";
    if (document.getElementById("check2").checked) hear = hear + "google ";
    if (document.getElementById("check3").checked) hear = hear + "yelp";
    document.getElementById("hear1").innerHTML = hear;
    document.getElementById("comments1").innerHTML = document.getElementById("comments").value;
    document.getElementById("destination1").innerHTML = document.getElementsByName("countryck")[0].value;

    var type = "";
    if (document.getElementById("NewYork").checked) type = "New York";
    else if (document.getElementById("LosAngeles").checked) type = "Los Angeles";
    else if (document.getElementById("Boston").checked) type = "Boston";
    else if (document.getElementById("Mumbai").checked) type = "Mumbai";
    else if (document.getElementById("Bangalore").checked) type = "Bangalore";
    else if (document.getElementById("Delhi").checked) type = "Delhi";
    else if (document.getElementById("Montreal").checked) type = "Montreal";
    else if (document.getElementById("Vancouver").checked) type = "Vancouver";
    else if (document.getElementById("Toronto").checked) type = "Toronto";
    else if (document.getElementById("Manchester").checked) type = "Manchester";
    else if (document.getElementById("Chelmsford").checked) type = "Chelmsford";
    else if (document.getElementById("Birmingham").checked) type = "Birmingham";
    else if (document.getElementById("Paris").checked) type = "Paris";
    else if (document.getElementById("Bordeaux").checked) type = "Bordeaux";
    else if (document.getElementById("Marseille").checked) type = "Marseille";
    
    document.getElementById("animalType").innerHTML = type;
    document.getElementById("color1").innerHTML = document.getElementsByName("color")[0].value;

    document.getElementById("reset").click();
    document.getElementById("summary").style.display = "";

    document.getElementById("LosAngeles").style.display = "none";
    document.getElementById("Boston").style.display = "none";
    document.getElementById("Mumbai").style.display = "none";
    document.getElementById("Bangalore").style.display = "none";
    document.getElementById("Delhi").style.display = "none";
    document.getElementById("Montreal").style.display = "none";
    document.getElementById("Vancouver").style.display = "none";
    document.getElementById("Toronto").style.display = "none";
    document.getElementById("Manchester").style.display = "none";
    document.getElementById("Chelmsford").style.display = "none";
    document.getElementById("Birmingham").style.display = "none";
    document.getElementById("Paris").style.display = "none";
    document.getElementById("Bordeaux").style.display = "none";
    document.getElementById("Marseille").style.display = "none";

    document.getElementById("color").style.display = "none";
}


function ratingTextBoxDisplay(ele) {
    if (ele.checked) {
        document.getElementById("color").style.display = "";
        document.getElementsByName("color")[0].required = true;
    } else {
        document.getElementById("color").style.display = "none";
        document.getElementsByName("color")[0].required = false;
    }
}

function countryCheck() {
    var x = document.getElementById("countryck").value;
    if (x == "USA") {
        document.getElementById("India").getElementsByTagName("input")[0].checked = false;
        document.getElementById("Canada").getElementsByTagName("input")[0].checked = false;
        document.getElementById("GreatBritain").getElementsByTagName("input")[0].checked = false;
        document.getElementById("France").getElementsByTagName("input")[0].checked = false;

        document.getElementById("USA").style.display = "";
        document.getElementById("India").style.display = "none";
        document.getElementById("Canada").style.display = "none";
        document.getElementById("GreatBritain").style.display = "none";
        document.getElementById("France").style.display = "none";
    } else if (x == "India") {
        document.getElementById("USA").getElementsByTagName("input")[0].checked = false;
        document.getElementById("Canada").getElementsByTagName("input")[0].checked = false;
        document.getElementById("GreatBritain").getElementsByTagName("input")[0].checked = false;
        document.getElementById("France").getElementsByTagName("input")[0].checked = false;

        document.getElementById("USA").style.display = "none";
        document.getElementById("India").style.display = "";
        document.getElementById("Canada").style.display = "none";
        document.getElementById("GreatBritain").style.display = "none";
        document.getElementById("France").style.display = "none";
    } else if (x == "Canada") {
        document.getElementById("USA").getElementsByTagName("input")[0].checked = false;
        document.getElementById("India").getElementsByTagName("input")[0].checked = false;
        document.getElementById("GreatBritain").getElementsByTagName("input")[0].checked = false;
        document.getElementById("France").getElementsByTagName("input")[0].checked = false;

        document.getElementById("USA").style.display = "none";
        document.getElementById("India").style.display = "none";
        document.getElementById("Canada").style.display = "";
        document.getElementById("GreatBritain").style.display = "none";
        document.getElementById("France").style.display = "none";
    } else if (x == "GreatBritain") {
        document.getElementById("USA").getElementsByTagName("input")[0].checked = false;
        document.getElementById("India").getElementsByTagName("input")[0].checked = false;
        document.getElementById("Canada").getElementsByTagName("input")[0].checked = false;
        document.getElementById("France").getElementsByTagName("input")[0].checked = false;

        document.getElementById("USA").style.display = "none";
        document.getElementById("India").style.display = "none";
        document.getElementById("Canada").style.display = "none";
        document.getElementById("GreatBritain").style.display = "";
        document.getElementById("France").style.display = "none";
    } else if (x == "France") {
        document.getElementById("USA").getElementsByTagName("input")[0].checked = false;
        document.getElementById("India").getElementsByTagName("input")[0].checked = false;
        document.getElementById("Canada").getElementsByTagName("input")[0].checked = false;
        document.getElementById("GreatBritain").getElementsByTagName("input")[0].checked = false;

        document.getElementById("USA").style.display = "none";
        document.getElementById("India").style.display = "none";
        document.getElementById("Canada").style.display = "none";
        document.getElementById("GreatBritain").style.display = "none";
        document.getElementById("France").style.display = "";
    }
}

//Validation of the inputs
function validateInputs(object, type, nameType) {
    var regExFName = /^[a-zA-Z]+$/;
    var regExLName = /^[a-zA-Z]+$/;
    var regExEmailId = /^([\w\.]+)@northeastern.edu$/;
    var regExPhoneNumber = /^\d{3}-?\d{3}-\d{4}$/;
    var regExStreetAddress1 = /[a-z]+/i;
    var regExCity = /^[a-z ]+$/i;
    var regExState = /[a-z ]+$/i;
    var regExZipcode = /^\d{5}$/;

    var name = "errorMsg" + nameType;

    switch (type) {
        case 1:
            if (!object.value.trim().match(regExFName)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 2:
            if (!object.value.trim().match(regExLName)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 3:
            if (!object.value.trim().match(regExEmailId)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 4:
            if (!object.value.trim().match(regExPhoneNumber)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 5:
            if (!object.value.trim().match(regExStreetAddress1)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 6:
            if (!object.value.trim().match(regExCity)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 7:
            if (!object.value.trim().match(regExState)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
        case 8:
            if (!object.value.trim().match(regExZipcode)) {
                object.style.border = "4px solid red";
                document.getElementById(name).style.display = "block";
                object.value = "";
            } else {
                object.style.border = "";
                document.getElementById(name).style.display = "none";
            }
            break;
    }
}