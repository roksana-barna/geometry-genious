document.getElementById('trianglecalculate').addEventListener('click',function(){
const triangleField=document.getElementById('b-cm');
const newTriangleFieldString=triangleField.value;
const newTriangleAmount=parseFloat(newTriangleFieldString);
triangleField.value=newTriangleAmount;
triangleField.value='';

const triangleField2=document.getElementById('h-cm');
const newTriangleFieldString2nd=triangleField2.value;
const newTriangleAmount2nd=parseFloat(newTriangleFieldString2nd);
triangleField2.value=newTriangleAmount2nd;
triangleField2.value='';

  const triangleAreaCalculate=document.getElementById('triangleArea');

 const triangleAreaCalculateString=triangleAreaCalculate.innerText;

const triangleAreaCalculates=parseFloat(triangleAreaCalculateString);
const addingB=newTriangleAmount+triangleAreaCalculates;
const addinH=newTriangleAmount2nd+triangleAreaCalculates;
const letsCalculate=addingB*addinH;
triangleAreaCalculate.innerText=letsCalculate;
 const arearesult=document.getElementById('area');
const result=arearesult+letsCalculate;

});

// rectangulae section
document.getElementById('rectcalculate').addEventListener('click',function(){
    const triangleField=document.getElementById('rectangleinput1');
    const newTriangleFieldString=triangleField.value;
    const newTriangleAmount=parseFloat(newTriangleFieldString);
    triangleField.value=newTriangleAmount;
    triangleField.value='';
    
    const triangleField2=document.getElementById('rectangleinput2');
    const newTriangleFieldString2nd=triangleField2.value;
    const newTriangleAmount2nd=parseFloat(newTriangleFieldString2nd);
    triangleField2.value=newTriangleAmount2nd;
    triangleField2.value='';
    
      const triangleAreaCalculate=document.getElementById('rectArea');
    
     const triangleAreaCalculateString=triangleAreaCalculate.innerText;
    
    const triangleAreaCalculates=parseFloat(triangleAreaCalculateString);
    const addingB=newTriangleAmount+triangleAreaCalculates;
    const addinH=newTriangleAmount2nd+triangleAreaCalculates;
    const letsCalculate=addingB*addinH;
    triangleAreaCalculate.innerText=letsCalculate;
     const arearesult=document.getElementById('area');
    const result=arearesult+letsCalculate;
});

