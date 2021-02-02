window.onload=init;
        
        var ld=12;
        var setting={
        count:0,
        total:24,
        delay:6,     
    	picIndex:[0,1,2,3,4,5,6,7,8,9,10,11],         
    }
 
 	var x1;
    	var array = new Array(12);
    			
    			array[1]="1";
    			array[2]="2";
    			array[3]="3";
    			array[4]="4";
    			array[5]="5";
    			array[6]="6";
    			array[7]="7";
    			array[8]="8";
    			array[9]="9";
    			array[10]="10";
    			array[11]="11";
    			array[12]="12";
    			 
        function init(){

	document.getElementById('r1').style.visibility = 'hidden';
    document.getElementById('r2').style.visibility = 'hidden';
    document.getElementById('r3').style.visibility = 'hidden';
    document.getElementById('r4').style.visibility = 'hidden';
    document.getElementById('r5').style.visibility = 'hidden';
    document.getElementById('r6').style.visibility = 'hidden';
    document.getElementById('r7').style.visibility = 'hidden';
    document.getElementById('r8').style.visibility = 'hidden';
    document.getElementById('r9').style.visibility = 'hidden';
    document.getElementById('r10').style.visibility = 'hidden';
    document.getElementById('r11').style.visibility = 'hidden';
    document.getElementById('r12').style.visibility = 'hidden';
    
        document.getElementById("drawBtn").onclick=function(){
        
        document.getElementById('drawBtn').disabled = true;
        
            setting.count=0;
            setting.delay=10;
            this.disable=true;//禁用按钮
            var drawBtn=this;
            
            //获取所有图片的div
            var allDivs=document.getElementsByClassName("pic");
            
            //获得一个随机整数，代表中奖的那个位置，3*12+(0-7)
            setting.total+=Math.floor(Math.random()*allDivs.length);
            
            //设置定时器，依次修改每个div边框的颜色.
            setTimeout(function show(){
                
                //重置上一个边框的颜色
              for (var i=0;i<allDivs.length;i++){
                  allDivs[i].style.borderColor="#fff";
                  allDivs[i].style.opacity=0.7;
              }
              
              
                //找到要修改的那个边框的颜色设置
            	var currentPic=allDivs[setting.picIndex[setting.count%ld]];
                    currentPic.style.borderColor="RED";
                    currentPic.style.opacity=1.0;
                setting.count++;
                setting.delay+=0.4*setting.count;
                    if(setting.count>setting.total){
                        drawBtn.disable=false;
                        
                        var x=currentPic.textContent;
                        var x1=parseInt(x);
                        currentPic.style.borderColor="YELLOW";
                        document.getElementById('r'+array[x1]).style.visibility = 'visible';
                        //alert("The winner is " + array[x1]);
                        document.getElementById('p'+ array[x1]).style.visibility = 'hidden';
                        document.getElementById('drawBtn').disabled = false;
                          
                        var removeItem = array[x1]-1;   
 
						setting.picIndex = $.grep(setting.picIndex, function(value) {
  							return value != removeItem;
						});
						
						$( 'p'+ array[x1] ).remove();
						
						$(document.getElementById('r'+ array[x1])).animate(
						{fontSize: '3em'},"slow");
						
						ld=ld-1;
						//setting.delay=10; 
                        return;  
                    }
                    
                    setTimeout(show,setting.delay);
            },setting.delay);
            
        }
         
        }