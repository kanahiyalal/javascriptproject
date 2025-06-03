// let colorPicker = document.getElementById('colorpicker')
// let colorCode = document.getElementById('colorcode')
// let output = document.getElementById('output')
// colorPicker.addEventListener('input', (c) => {
//     let selectColor = c.target.value;
//     colorCode.textContent = selectColor
//     output.style.backgroundColor = selectColor
// })


// Project-2
// form.addEventListener('submit', function(element) {
//     element.preventDefault()

//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const result = document.querySelector('#result');

//     if (height === '' || height < 0 || isNaN(height)) {
//         result.innerHTML = `please give a  valid height ${height};  `
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         result.innerHTML = `please give  a valid weight ${weight}`
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2)
//         result.innerHTML = `<span>${bmi}</span>`
//     }
// })



// project-3 clock
// const watch = document.createElement('clock')
// setInterval(function() {
//     const date = new Date()
//         // console.log(date.toLocaleDateString());
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000);


const user = {
    name: "kanahiya",
    greet: function() {
        setTimeout(() => {
            console.log(`MY name is ${this.name} `);
        }, 1000);
    },
}
user.greet()