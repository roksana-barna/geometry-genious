let isValidate;
function triangleRhombusPentagonCalculate(id, firstInput, secondInput)
{
    validation(id, firstInput, secondInput)
    const calculation = 0.5*firstInput*secondInput;
    const result = calculation.toFixed(2);
    showResult(id, result);
}

function ellipseCalculate(id, firstInput, secondInput)
{
    validation(id, firstInput, secondInput)
    const calculation = 3.14*firstInput*secondInput;
    const result = calculation.toFixed(2);
    showResult(id, result);
}

function rectangleParallelogramCalculate(id, firstInput, secondInput)
{
    validation(id, firstInput, secondInput)
    const calculation = firstInput*secondInput;
    const result = calculation.toFixed(2);
    showResult(id, result);
}

function validation(id, firstInput, secondInput)
{
    if (typeof firstInput != 'number' || typeof secondInput != 'number' || firstInput < 0 || secondInput < 0) {
        document.getElementById('alert').innerText = 'Invalid input';
        return isValidate = 0;
    }
}

function showResult(id, result)
{
    if(isValidate != 0)
    {
        const ol = document.getElementById('result');
        const li = document.createElement('li');
        const div = document.createElement('div');
        const nameP = document.createElement('p');
        nameP.innerText = id;
        const resultP = document.createElement('p');
        resultP.innerText = result;
        div.appendChild(nameP);
        div.appendChild(resultP);
        div.classList.add('d-flex');
        div.classList.add('justify-content-between');
        li.appendChild(div);
        ol.appendChild(li);
    }
}

document.getElementById('hoverColor').addEventListener('mouseover', function (){
    const ab = '#'+Math.random().toString(16).slice(2,8);
    document.getElementById('hoverColor').style.backgroundColor = ab;
})

document.getElementById('hoverColor1').addEventListener('mouseover', function (){
    const ab = '#'+Math.random().toString(16).slice(2,8);
    document.getElementById('hoverColor1').style.backgroundColor = ab;
})

document.getElementById('triangleCalculate').addEventListener('click', function (){
    const firstInput = document.getElementById('triangleB').value;
    const secondInput = document.getElementById('triangleH').value;
    const result = triangleRhombusPentagonCalculate('Triangle', parseFloat(firstInput), parseFloat(secondInput));
    document.getElementById('triangleBase').innerText = firstInput;
    document.getElementById('triangleHeight').innerText = secondInput;
});

document.getElementById('rectangleCalculate').addEventListener('click', function (){
    const firstInput = document.getElementById('rectangleW').value;
    const secondInput = document.getElementById('rectangleL').value;
    const result = rectangleParallelogramCalculate('Rectangle', parseFloat(firstInput), parseFloat(secondInput));
    document.getElementById('rectangleBase').innerText = firstInput;
    document.getElementById('rectangleHeight').innerText = secondInput;
});

document.getElementById('parallelogramCalculate').addEventListener('click', function (){
    const firstInput = document.getElementById('parallelogramB').value;
    const secondInput = document.getElementById('parallelogramH').value;
    const result = rectangleParallelogramCalculate('Parallelogram', parseFloat(firstInput), parseFloat(secondInput));
    document.getElementById('parallelogramBase').innerText = firstInput;
    document.getElementById('parallelogramHeight').innerText = secondInput;
});

document.getElementById('rhombusCalculate').addEventListener('click', function (){
    const firstInput = document.getElementById('rhombusD1').value;
    const secondInput = document.getElementById('rhombusD2').value;
    const result = triangleRhombusPentagonCalculate('Rhombus', parseFloat(firstInput), parseFloat(secondInput));
    document.getElementById('rhombusBase').innerText = firstInput;
    document.getElementById('rhombusHeight').innerText = secondInput;
});

document.getElementById('pentagonCalculate').addEventListener('click', function (){
    const firstInput = document.getElementById('pentagonP').value;
    const secondInput = document.getElementById('pentagonB').value;
    const result = triangleRhombusPentagonCalculate('Pentagon', parseFloat(firstInput), parseFloat(secondInput));
    document.getElementById('pentagonBase').innerText = firstInput;
    document.getElementById('pentagonHeight').innerText = secondInput;
});

document.getElementById('ellipseCalculate').addEventListener('click', function (){
    const firstInput = document.getElementById('ellipseA').value;
    const secondInput = document.getElementById('ellipseB').value;
    const result = ellipseCalculate('Ellipse', parseFloat(firstInput), parseFloat(secondInput));
    document.getElementById('ellipseBase').innerText = firstInput;
    document.getElementById('ellipseHeight').innerText = secondInput;
});