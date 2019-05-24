function test() {

    var wifi = document.getElementById("wifi").value;
    var streaming = document.getElementById("streaming").value;
    var socmed = document.getElementById("socmed").value;
    var budget = document.getElementById("budget").value;
    var name = document.getElementById("name").value;
    var SpanInsertName = document.getElementById("InsertName");

    SpanInsertName.innerHTML = name;

    var text = "";

    var submit = wifi + streaming + socmed + budget;
    var option = "";
    switch (submit) {

        case "aaaa":
        case "aaab":
        case "aabb":
        case "abbb":
            option = "basic";
            break;
        case "bbbb":
        case "bbaa":
        case "bbba":
        case "bbcc":
            option = "medium";
            break;
        case "cccc":
        case "ccca":
        case "ccab":
        case "cabb":
            option = "premium";
            break;
    }

    showImage(option);
}

function showImage(option) {


    var divBasic = document.getElementById('basic');
    divBasic.style.display = 'none';

    var divMedium = document.getElementById('medium');
    divMedium.style.display = 'none';

    var divPremium = document.getElementById('premium');
    divPremium.style.display = 'none';


    if (option == "basic") {
        divBasic.style.display = 'block';
    } else if (option == "medium") {
        divMedium.style.display = 'block';
    } else if (option == "premium") {
        divPremium.style.display = 'block';
    }
}