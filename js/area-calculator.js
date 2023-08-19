function calculateTriangleArea (){
    // // Get base value
    // const baseField = document.getElementById('triangle-base');
    // const baseFieldText = baseField.value;
    // const base = parseFloat(baseFieldText);
    // // Get height value
    // const heightField = document.getElementById('triangle-height');
    // const heightFieldText = heightField.value;
    // const height = parseFloat(heightFieldText);

    // const area = 0.5 * base * height;


    // // Show triangle area
    // const triangleArea = document.getElementById('triangle-area');
    // triangleArea.innerText = area;




    // Using Reuseable function

    // Get base and height value
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height')
    const area = 0.5 * base * height;

    // Set area value
    setAreaValue('triangle-area', area)
}



// Rectangle Area Calculate
function calculateRectangleArea(){
    // Get area value
    const width = getInputValue('rectangle-width');
    const height = getInputValue('rectangle-height');
    const area = width * height;
    // // Set area vale
    // const rectangleArea = document.getElementById('rectangle-area');
    // rectangleArea.innerText = area;


    // Set Rectangle Area value
    setAreaValue('rectangle-area', area);
}

// Parallelogram Area Calculate

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    setAreaValue('parallelogram-area', area);
}




// Get
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
// Set
function setAreaValue (id, area){
    const areaElement = document.getElementById(id);
    areaElement.innerText = area;
}