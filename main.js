var data="" ;

var convert_form = document.querySelector(".convert") , para = document.querySelector("p") ; 

convert_form.onsubmit = function (e) {
  e.preventDefault();
  var element = e.target.elements;
  var price = {
    nis : element['total'].value,
    selected_type: element['selected-currancy'].value,
  };

  var Rate;

  switch (price.selected_type) {
    case '$USADollar':
      Rate = 0.27;
      break;
    case'JordanianDinar':
      Rate = 0.19; 
      break;
    case'NIS':
      Rate = 1; 
      break;
    default:
      para.textContent = "Invalid type";
      return;
  }
  var res = price.nis * Rate;
  para.textContent = `The result will be :  ${res} `;
}
