export function addClassNameNearestPlace(inputText, className) {
  var output = [];
  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }
  var json = inputText.split(' ');
  json.forEach(function(item) {
    output.push(
      item
        .replace(/\'/g, '')
        .split(/(\d+)/)
        .filter(Boolean)
    );
  });

  let newMarkup = '';

  output.forEach(word => {
    word.forEach(e => {
      if (isNumber(e) || e == 'kms' || e == 'Kms') {
        newMarkup += `<span class="${className}">${e}</span>`;
      } else {
        newMarkup += ' ' + e + ' ';
      }
    });
  });

  return newMarkup;
}


export function addClassNameOfferText(inputText) {
  var output = [];
  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }
  var json = inputText.split(' ');
  json.forEach(function(item) {
    output.push(
      item
        .replace(/\'/g, '')
        .split(/(\d+)/)
        .filter(Boolean)
    );
  });

  let newMarkup = '';

  output.forEach(word => {
    word.forEach(e => {
      if (isNumber(e)||e==',') {
        newMarkup += `<span class="font-green-blue">${e}</span>`;
      }else if(e=='LOGIN'){
        newMarkup += ' '+`<span class="font-login">${e}</span>`+' ';
      } else {
        newMarkup += ' ' + e + ' ';
      }
    });
  });

  return newMarkup;
}
