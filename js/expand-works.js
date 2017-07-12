
var expandTarget = '';
var lastCut = 0;


var wdImg1 = sel('.wd-img-1');
var wdImg2 = sel('.wd-img-2');
var wdImg3 = sel('.wd-img-3');
var wdImg4 = sel('.wd-img-4');
var wdMass = [wdImg1, wdImg2, wdImg3, wdImg4];

sel('.works-all').addEventListener('mouseover', listenOn);
function listenOn(e){
    expandTarget = e.target.className;
    if(expandTarget == wdImg1.className){
        sel('.wd-expand-1').style.display = 'flex';
    } else if(expandTarget == wdImg2.className){
        sel('.wd-expand-2').style.display = 'flex';
    } else if(expandTarget == wdImg3.className){
        sel('.wd-expand-3').style.display = 'flex';
    } else if(expandTarget == wdImg4.className){
        sel('.wd-expand-4').style.display = 'flex';
    }
}
sel('.works-all').addEventListener('mouseout', listenOff);
function listenOff(e){
    expandTarget = e.target.className;
    if(expandTarget == wdImg1.className){
        sel('.wd-expand-1').style.display = 'none';
    } else if(expandTarget == wdImg2.className){
        sel('.wd-expand-2').style.display = 'none';
    } else if(expandTarget == wdImg3.className){
        sel('.wd-expand-3').style.display = 'none';
    } else if(expandTarget == wdImg4.className){
        sel('.wd-expand-4').style.display = 'none';
    }

}
