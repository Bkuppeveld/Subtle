
var subtle = {
    startBounce : function(el) {
        // default settings
        var SPEED = 120;
        var DISTANCE = 5;
        var STARTPOS = el.offsetTop;


        // check if user has set different settings
        if(typeof el.dataset.distance !== 'undefined'){
            DISTANCE = el.dataset.distance; 
        }

         if(typeof el.dataset.speed !== 'undefined'){
            SPEED = el.dataset.speed; 
        }


        var stopPos = (parseInt(STARTPOS) + parseInt(DISTANCE));
        var pos = STARTPOS;
        var id = setInterval(frame, SPEED);   
        var direction = 'down'; 
        
        function frame() {
            if(direction == 'down'){
                if (pos >= stopPos) {
                    direction  = 'up';
                } 
                else {
                        pos++;
                    } 
            }

            if (direction == 'up'){
                if (pos <= STARTPOS) {
                    direction = 'down';
                } 
                else {
                    pos--;
                }
            }

            el.style.top = pos + 'px'; 
            
        } // end function frame
           
            
    },
    startWiggle : function(el){
        // default settings
        var SPEED = 120;
        var DISTANCE = 5;
        var STARTPOS = el.offsetLeft;
    


        // check if user has set different settings
        if(typeof el.dataset.distance !== 'undefined'){
            DISTANCE = el.dataset.distance; 
        }

         if(typeof el.dataset.speed !== 'undefined'){
            SPEED = el.dataset.speed; 
        }


        var stopPos = (parseInt(STARTPOS) + parseInt(DISTANCE));
        var pos = STARTPOS;
        var id = setInterval(frame, SPEED);   
        var direction = 'left'; 
        
        function frame() {
            if(direction == 'right'){
                if (pos >= stopPos) {
                    direction  = 'left';
                } 
                else {
                        pos++;
                   

                    } 
            }

            if (direction == 'left'){
                if (pos <= STARTPOS) {
                    direction = 'right';
                } 
                else {
                    pos--;
                    

                }
            }

            el.style.left = pos + 'px'; 
           } 
        } // end function frame
};



var wiggles = document.getElementsByClassName('subtle-wiggle');
var bouncers = document.getElementsByClassName('subtle-bounce');


for(var i = 0; i< wiggles.length; i++) {
    subtle.startWiggle(wiggles[i]);

}

for(var i = 0; i< bouncers.length; i++) {
    subtle.startBounce(bouncers[i]);

}






