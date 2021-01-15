const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let aOA = tutorials.map(l => l.split(' '))
  for(let wA=0;wA<aOA.length;wA++){
    for(let w=0;w<aOA[wA].length;w++){
      aOA[wA][w] = aOA[wA][w].charAt(0).toUpperCase() + aOA[wA][w].substr(1);
      //console.log(w)
    }
    aOA[wA] = aOA[wA].join(' ')
  }
  

  
  return aOA
}

