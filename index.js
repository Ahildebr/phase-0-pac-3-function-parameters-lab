//Function w/1 Value
function introduction(name) {
    return `Hi, my name is ${name}.`
}

//Function w/2 Values
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

//Function using optional parameter
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}