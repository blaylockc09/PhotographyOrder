/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Chris Blaylock
 *    Date:   01/28/2020

 *    Filename: ft.js
 */


 // global variables
 var photographerCost = 0;
 var totalCost = 0;
 var memoryBook = false;
 var reproductionRights = false;
// calculates all costs based on staff and adds to total cost
function calcStaff() {
    var num = document.getElementById("photognum");
    var hrs = document.getElementById("photoghrs");
    var distance = document.getElementById("distance");
    totalCost -= photographerCost;
    photographerCost = num.value * 100 * hrs.value + distance.value*num.value;
    totalCost += photographerCost;
    document.getElementById("estimate").innerHTML = "$" + totalCost;

}
// adds/subtracts cost of memory book from total cost
function toggleMembook() { 
    (document.getElementById("membook").checked === false) ?   totalCost -= 250 : totalCost += 250; 
    document.getElementById("estimate").innerHTML =   "$" + totalCost;
}
// adds/subtracts cost of reproduction rights from total cost 
function toggleRights() {
    (document.getElementById("reprodrights").checked === false) ? totalCost -= 1250 : totalCost += 1250; 
    document.getElementById("estimate").innerHTML = "$" + totalCost;
}

function resetForm() {
    document.getElementById("photognum").value = 1;
    document.getElementById("photoghrs").value = 2;
    document.getElementById("membook").checked = memoryBook; 
    document.getElementById("reprodrights").checked = reproductionRights;
    document.getElementById("distance").value = 0;
    calcStaff();
    createEventListeners();
    
}
// Creates event listeners 
function createEventListeners(){
    document.getElementById("photognum").addEventListener("change", calcStaff, false);
    document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
    document.getElementById("membook").addEventListener("change", toggleMembook, false);
    document.getElementById("reprodrights").addEventListener("change", toggleRights, false);
    document.getElementById("distance").addEventListener("change", calcStaff, false);
}

window.addEventListener("load", resetForm, false);
 
