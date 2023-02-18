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
const letsCalculate=0.5*addingB*addinH;
triangleAreaCalculate.innerText=letsCalculate;
 const arearesult=document.getElementById('area');
const result=arearesult+letsCalculate;

});

// rectangulae section
document.getElementById('rectcalculate').addEventListener('click',function(){
    const rectangleField=document.getElementById('rectangleinput1');
    const newrectangleFieldString=rectangleField.value;
    const newTriangleAmount=parseFloat(newrectangleFieldString);
    rectangleField.value=newTriangleAmount;
    rectangleField.value='';
    
    const rectangleField2=document.getElementById('rectangleinput2');
    const newrectangleFieldString2nd=rectangleField2.value;
    const newrectangleAmount2nd=parseFloat(newrectangleFieldString2nd);
    rectangleField2.value=newrectangleAmount2nd;
    rectangleField2.value='';
    
      const rectangleAreaCalculate=document.getElementById('rectArea');
    
     const rectangleAreaCalculateString=rectangleAreaCalculate.innerText;
    
    const rectangleAreaCalculates=parseFloat(rectangleAreaCalculateString);
    const addingw=newrectangleAmount+rectangleAreaCalculates;
    const addinl=newrectangleAmount2nd+rectangleAreaCalculates;
    const letsCalculate=addingw*addinl;
    rectangleAreaCalculate.innerText=letsCalculate;
     const arearesult=document.getElementById('area');
    const result=arearesult+letsCalculate;

});
// parallaologram
document.getElementById('parellallo').addEventListener('click',function(){
    const parellaloField=document.getElementById('parainput1');
    const newparellaloFieldString= parellaloField.value;
    const newparellaloAmount=parseFloat(newparellaloFieldString);
    parellaloField.value=newparellaloAmount;
    parellaloField.value='';
    
      const  parellaloAreaCalculate=document.getElementById('parainput2');
    
     const  parellaloAreaCalculateString=parellaloAreaCalculate.value;
    
    const  parellaloAreaCalculates=parseFloat( parellaloAreaCalculateString);
    const addingb=10;
    const addinh=12;
    const letsCalculate=addingb*addinh;
    parellaloAreaCalculate.value=letsCalculate;
     const arearesult=document.getElementById('area');
    const result=arearesult+letsCalculate;

});
// 
document.getElementById('rhombo').addEventListener('click',function(){
    const rhomboField=document.getElementById('rhomboinput1');
    const newrhomboFieldString= rhomboField.value;
    const newrhomboAmount=parseFloat(newrhomboFieldString);
    rhomboField.value=newrhomboAmount;
    rhomboField.value='';
    
      const  rhomboAreaCalculate=document.getElementById('rhomboinput2');
    
     const  rhomboAreaCalculateString=rhomboAreaCalculate.value;
    
    const  rhomboAreaCalculates=parseFloat( rhomboAreaCalculateString);
    const addingd1=16;
    const addingd2=8;
    const letsCalculate=0.5*addingd1*addingd2;
    rhomboAreaCalculate.value=letsCalculate;
     const arearesult=document.getElementById('area');
    const result=arearesult+letsCalculate;

});

// pentagon
document.getElementById('pentabutton').addEventListener('click',function(){
    const pentaField=document.getElementById('pentainput1');
    const newpentaFieldString= pentaField.value;
    const newpentaAmount=parseFloat(newpentaFieldString);
    pentaField.value=new rhomboAmount;
    pentaField.value='';
    
      const  pentaAreaCalculate=document.getElementById('pentainput2');
    
     const  pentaAreaCalculateString=pentaAreaCalculate.value;
    
    const  pentaAreaCalculates=parseFloat( pentaAreaCalculateString);
    const addingp=6;
    const addingb=10;
    const letsCalculate=0.5*addingp*addingb;
    pentaAreaCalculate.value=letsCalculate;
     const arearesult=document.getElementById('area');
    const result=arearesult+letsCalculate;

});
document.getElementById('ellipsebutton').addEventListener('click',function(){
    const ellipseField=document.getElementById('ellipseinput');
    const newellipseFieldString= ellipseField.value;
    const newellipseAmount=parseFloat(newellipseFieldString);
    ellipseField.value=newellipseAmount;
    ellipseField.value='';
    
      const  ellipseAreaCalculate=document.getElementById('ellipsearea');
    
     const  ellipseAreaCalculateString=ellipseAreaCalculate.value;
    
    const  ellipseAreaCalculates=parseFloat( ellipseAreaCalculateString);
    const addinga=10;
    const addingb=4;
    const letsCalculate=3.14*addinga*addingb;
    ellipseAreaCalculate.value=letsCalculate;
     const arearesult=document.getElementById('area');
    const result=arearesult+letsCalculate;

});
