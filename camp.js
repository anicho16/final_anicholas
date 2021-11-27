
/**
 * Pricing Calculator
 */

document.getElementById('price-submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    event.preventDefault();

    let afterCare = document.getElementById('after-care').checked;
    let numberOfKids = document.getElementById('quantity').value;
    let weekCamp = document.getElementById('week-camp').checked;
    let dayCamp = document.getElementById('day-camp').checked;

    const typeOfCamp = document.querySelectorAll('input[name="campType"]');
    let campPrice;
    let selectedCamp;
    for (const camp of typeOfCamp) {
        if (camp.checked) {
            campPrice = camp.value;
            selectedCamp = camp.nextElementSibling.innerHTML;
            break;
        }
    }

    let totalCost;
    if (afterCare && weekCamp) {
        totalCost = numberOfKids * campPrice + 50 * numberOfKids;
    } else if (afterCare && dayCamp) {
        totalCost = numberOfKids * campPrice + 15 * numberOfKids;
    } else {
        totalCost = numberOfKids * campPrice;
    }

    displayResults(selectedCamp, numberOfKids, totalCost);
}

function displayResults(selectedCamp, numberOfKids, totalCost) {
    document.getElementById('selected-camp').innerHTML = selectedCamp;
    document.getElementById('quantity-kids').innerHTML = numberOfKids;
    document.getElementById('total-cost').innerHTML = totalCost;

    let children = document.getElementById('child');
    if(numberOfKids> 1) {
        children.innerHTML = "children";
    } else {
        children.innerHTML = "child";
    }
    let campResult = document.getElementById('camp-result');
    campResult.classList.remove('d-none');
}


/**
 * Example starter JavaScript for disabling form submissions if 
 * there are invalid fields  
 */
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();