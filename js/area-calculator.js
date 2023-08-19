function calculateTriangleArea (){
    // Get
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height')
    const area = 0.5 * base * height;

    // Validate
    if(isNaN(base) || isNaN(height)){
        alert('Please insert number')
        return;
    }

    // Set
    setAreaValue('triangle-area', area)
}

// Rectangle Area Calculate
function calculateRectangleArea(){
    // Get
    const width = getInputValue('rectangle-width');
    const height = getInputValue('rectangle-height');
    const area = width * height;

    // Validate
    if( isNaN(width) || isNaN(height)){
        alert('Plesae insert number')
        return;
    }

    // Set
    setAreaValue('rectangle-area', area);
}

// Parallelogram Area Calculate
function calculateParallelogramArea(){
    // Get
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height')
    const area = base * height;

    // Validate
    if( isNaN(base) || isNaN(height)){
        alert('Plesae insert number')
        return;
    }

    // Set
    setAreaValue('parallelogram-area', area);
}




// Get Reuseable Function
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
// Set Reuseable Function
function setAreaValue (id, area){
    const areaElement = document.getElementById(id);
    areaElement.innerText = area;
}