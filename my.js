function trace()
{

    var num1 = parseInt(document.getElementById('num1').value);
    document.getElementById('div').style.display='none';

    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('num2').style.display='none';

    document.getElementById('button').style.display='none';

    var num1_x=[num1];
    var num1_y=[1];
    
    while(true)
    {
        if(num1%2===0)
        {
            num1_y.push(num1_x.length+1);
            num1_x.push(num1/2);
            num1/=2;
        }

        if(num1===1)
        {
            console.log(num1_x);
            console.log(num1_y);
            break;
                    
        }

        if(num1%2===1)
        {
            num1_y.push(num1_x.length+1);
            num1_x.push((num1*3)+1);
            num1=(num1*3)+1;
        }

        
    }

    
    var num2_x=[num2];
    var num2_y=[1];
    
    while(true)
    {
        if(num2%2===0)
        {
            num2_y.push(num2_x.length+1);
            num2_x.push(num2/2);
            num2=num2/2;
        }

        if(num2===1)
        {
            console.log(num2_x);
            break;
                    
        }
        
        if(num2%2===1)
        {
            num2_y.push(num2_x.length+1);
            num2_x.push((num2*3)+1);
            num2=(num2*3)+1;
        }

        
    }
    var number_1 = {
        x: num1_y,
        y: num1_x,
        type: 'scatter'
    };
    
    var number_2 = {
        x: num2_y,
        y: num2_x,
        type: 'scatter'
    };
  
  var data = [number_1, number_2];
  
  Plotly.newPlot('mydiv', data);
  }