var fUnit = document.getElementById("firstUnit");
var sUnit = document.getElementById("secondUnit");
var tUnit = document.getElementById("thirdUnit");
var fConv = document.getElementById("firstConversion");
var sConv = document.getElementById("secondConversion");
var tConv = document.getElementById("thirdConversion");

function reset() {
  
  // reset everything to its default value
  fUnit.innerHTML = "ft";
  sUnit.innerHTML = "cm";
  tUnit.innerHTML = "mm";
  fConv.innerHTML = "";
  sConv.innerHTML = "";
  tConv.innerHTML = "";
  document.getElementById("distInput").value = "";
  document.getElementById("distStart").value = "in";
}

function distanceCalculate() {
  var userInput = document.getElementById("distInput");
  var unit = document.getElementById("distStart").value;
  var n = parseFloat(userInput.value);
  var inch;
  var foot;
  var ftinch;
  var cm;
  var mm;
  var num;
  
  if (unit === "in") {
    // convert user input into feet and inches
    num = n / 12;
    foot = Math.floor(num);
    ftinch = ((num - foot) * 12).toFixed(2);

    // convert user input into mm
    mm = n * 25.4;

    // convert user input into cm
    cm = n * 2.54;

    // display all converted values
    fUnit.innerHTML = "ft";
    
    // if inches is more than a foot display feet and inches
    // otherwise just display inches
    if (foot >= 1){
      fConv.innerHTML = foot + "ft " + ftinch + "in";
    } else {
      fConv.innerHTML = ftinch + "in";
    }
    sUnit.innerHTML = "cm";
    sConv.innerHTML = cm.toFixed(2) + "cm";
    tUnit.innerHTML = "mm";
    tConv.innerHTML = mm.toFixed(2) + "mm";
  } else if (unit === "ft") {
    // convert user input into inches
    inch = n * 12;

    // convert user input into mm
    mm = n * 304.8;

    // convert user input into cm
    cm = n * 30.48;

    // display all converted values
    fUnit.innerHTML = "in";
    fConv.innerHTML = inch.toFixed(2) + "in";
    sUnit.innerHTML = "cm";
    sConv.innerHTML = cm.toFixed(2) + "cm";
    tUnit.innerHTML = "mm";
    tConv.innerHTML = mm.toFixed(2) + "mm";
  } else if (unit === "cm") {
    // convert user input into inches
    inch = n * 0.393701;

    // convert user input into feet and inches
    num = n * 0.0328084;
    foot = Math.floor(num);
    ftinch = ((num - foot) * 12).toFixed(2);

    // convert user input into cm
    mm = n * 10;

    // display all converted values
    fUnit.innerHTML = "in";
    fConv.innerHTML = inch.toFixed(2) + "in";
    sUnit.innerHTML = "ft";
    
    // if inches is more than a foot display feet and inches
    // otherwise just display inches    
    if (foot >= 1){
      sConv.innerHTML = foot + "ft " + ftinch + "in";
    } else {
      sConv.innerHTML = ftinch + "in";
    }
    tUnit.innerHTML = "mm";
    tConv.innerHTML = mm.toFixed(2) + "mm";
  } else {
    // convert user input into inches
    inch = n * 0.0393701;

    // convert user input into feet and inches
    num = n * 0.00328084;
    foot = Math.floor(num);
    ftinch = ((num - foot) * 12).toFixed(2);

    // convert user input into cm
    cm = n * 0.1;

    // display all converter values
    fUnit.innerHTML = "in";
    fConv.innerHTML = inch.toFixed(2) + "in";
    sUnit.innerHTML = "ft";
    
    // if inches is more than a foot display feet and inches
    // otherwise just display inches
    if (foot >= 1){
      sConv.innerHTML = foot + "ft " + ftinch + "in";
    } else {
      sConv.innerHTML = ftinch + "in";
    }
    tUnit.innerHTML = "cm";
    tConv.innerHTML = cm.toFixed(2) + "cm";
  }

  if (isNaN(n)) {
    // clears out the conversion fields if the value entered is either blank or not a number
    fConv.innerHTML = "";
    sConv.innerHTML = "";
    tConv.innerHTML = "";
  }

}

function squared() {
  var b;
  var c;
  var a = document.getElementById("sqInput").innerHTML;

  // side two calculation
  b = (((parseFloat(a) / 3) * 4) * 8) / 8;

  if (isNaN(b)) {
    document.getElementById("sideTwo").innerHTML = "";
  } else {
    document.getElementById("sideTwo").innerHTML = b.toFixed(2);
  }

  //side three calculation
  c = parseFloat((Math.sqrt((a * a) + (b * b)) * 8) / 8);

  if (isNaN(c)) {
    document.getElementById("sideThree").innerHTML = "";
  } else {
    document.getElementById("sideThree").innerHTML = c.toFixed(2);
  }
}

// run the conversion calculations every time a key is released
// while adding characters into the distance input field
document.getElementById("distInput").addEventListener("keyup", function() {
  distanceCalculate();
});

// run the reset function when clicking the reset button
document.getElementById("reset").addEventListener("click", function() {
  reset();
});

// run the conversion calculations every time the start type
// combo box is changed
document.getElementById("distStart").addEventListener("change", function() {
  distanceCalculate();
});

// run the square calculations every time a key is released
// while adding characters to the known side input
document.getElementById("sqInput").addEventListener("keyup", function() {
  squared();
});

// if enter key is pressed in the square calculator this will
// ignore the new line behavior
document.getElementById("sqInput").addEventListener("keydown", function(e){
  if(e.keyCode == 13)
{
    e.preventDefault();
}
});