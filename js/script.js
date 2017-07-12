function sel(a){
    return document.querySelector(a);
}

var containerOne = sel('.content-1');
var containerTwo = sel('.content-2');
var containerThree = sel('.content-3');

var controlOne = sel('.tsc-one');
var controlTwo = sel('.tsc-two');
var controlThree = sel('.tsc-three');

var clickTarget = '';

//===================== TEAM SECTION SLIDER ======================================================

sel('.ts-control').addEventListener('click', function(e){
    clickTarget = e.target.className;
    if(clickTarget == controlOne.className){
        containerOne.style.display = 'flex';
        containerTwo.style.display = 'none';
        containerThree.style.display = 'none';
        controlOne.style.color = '#fcac45';
        controlTwo.style.color = 'white';
        controlThree.style.color = 'white';
    } else if(clickTarget == controlTwo.className){
        containerOne.style.display = 'none';
        containerTwo.style.display = 'flex';
        containerThree.style.display = 'none';
        controlOne.style.color = 'white';
        controlTwo.style.color = '#fcac45';
        controlThree.style.color = 'white'
    } else if(clickTarget == controlThree.className){
        containerOne.style.display = 'none';
        containerTwo.style.display = 'none';
        containerThree.style.display = 'flex';
        controlOne.style.color = 'white';
        controlTwo.style.color = 'white';
        controlThree.style.color = '#fcac45'
    }
})
//==========================================================================================================

//======================== WORKS FILTER ==================================================================

//--------------------- Categories -----------------------<<<<<<<<<<<<<<<<<<<<<
var allCateg = sel('.works-all');
var wdCateg = sel('.wd-works');
var phCateg = sel('.ph-works');
var mdCateg = sel('.md-works');
var listCateg = [wdCateg, phCateg, mdCateg];

// --------------------------Filter Buttons -------------------<<<<<<<<<<<<<<<<<<<<<<<<
var allFilterButton = sel('.all-filter');
var wdFilterButton = sel('.web-design-filter');
var phFilterButton = sel('.photography-filter');
var mdFilterButton = sel('.mobile-design-filter');
var listFilterButtons = [allFilterButton, wdFilterButton, phFilterButton, mdFilterButton];

var clickFilterTarget = '';
var categIndex = 0;
var filterIndex = 0;

sel('.filter-type').addEventListener('click', function(e){
   clickFilterTarget = e.target.className;
   if(clickFilterTarget == allFilterButton.className){
       allFilterButton.style.fontWeight = 'bold';
       filterIndex = listFilterButtons.indexOf(allFilterButton);
       listFilterButtons.splice(filterIndex, 1);
       for(i = 0; i < listFilterButtons.length; i++){
           listFilterButtons[i].style.fontWeight = 'normal';
       }
       for(i = 0; i < listCateg.length; i++){
            listCateg[i].style.display = 'flex';
       }
       listFilterButtons.splice(filterIndex, 0, allFilterButton);
   } else if(clickFilterTarget == wdFilterButton.className){
       wdCateg.style.display = 'flex';
       categIndex = listCateg.indexOf(wdCateg);
       listCateg.splice(categIndex, 1);
       wdFilterButton.style.fontWeight = 'bold';
       filterIndex = listFilterButtons.indexOf(wdFilterButton);
       listFilterButtons.splice(filterIndex, 1);
       for(i = 0; i < listFilterButtons.length; i++){
           listFilterButtons[i].style.fontWeight = 'normal';
       }
       for(i = 0; i < listCateg.length; i++){
           listCateg[i].style.display = 'none';
       }
       listCateg.splice(categIndex, 0, wdCateg);
       listFilterButtons.splice(filterIndex, 0, wdFilterButton);
   } else if(clickFilterTarget == phFilterButton.className){
       phCateg.style.display = 'flex';
       categIndex = listCateg.indexOf(phCateg);
       listCateg.splice(categIndex, 1);
       phFilterButton.style.fontWeight = 'bold';
       filterIndex = listFilterButtons.indexOf(phFilterButton);
       listFilterButtons.splice(filterIndex, 1);
       for(i = 0; i < listFilterButtons.length; i++){
           listFilterButtons[i].style.fontWeight = 'normal';
       }
       for(i = 0; i < listCateg.length; i++){
           listCateg[i].style.display = 'none';
       }
       listCateg.splice(categIndex, 0, phCateg);
       listFilterButtons.splice(filterIndex, 0, phFilterButton);
   } else if(clickFilterTarget == mdFilterButton.className){
       mdCateg.style.display = 'flex';
       categIndex = listCateg.indexOf(mdCateg);
       listCateg.splice(categIndex, 1);
       mdFilterButton.style.fontWeight = 'bold';
       filterIndex = listFilterButtons.indexOf(mdFilterButton);
       listFilterButtons.splice(filterIndex, 1);
       for(i = 0; i < listFilterButtons.length; i++){
           listFilterButtons[i].style.fontWeight = 'normal';
       }
       for(i = 0; i < listCateg.length; i++){
           listCateg[i].style.display = 'none';
       }
       listCateg.splice(categIndex, 0, mdCateg);
       listFilterButtons.splice(filterIndex, 0, mdFilterButton);
   }
})

// ========--------------------------------- Expand Works =====================<<<<<<<<<<<<<<<


//var n = sel('.wd-expand').className;
//alert(n[n.length-1]);
