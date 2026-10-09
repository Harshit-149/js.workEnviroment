const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else {
        const bmi = weight / ((height / 100) ** 2);
        let message=`<span>${bmi.toFixed(2)}</span><br>`


        if(bmi<18.6) {
            message+=("you are underweight")
        }
        else if(18.9<=bmi && bmi<=24.9) {
            message+=("you are in the normal range")
        }
        else {
            message+=("you need to get yo shit together mate")
        }

        results.innerHTML=message;
    }
});
