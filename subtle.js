//subtle.js
//subtle object aanmaken die gaat dingen regelen.
// subtle bounce bv.
//config > bounce > starttijd en duration
// object > subtle
// eventhandlers ff kijken
var subtle = {
    startBounce : function(el) {

        var startPos = el.offsetTop;
        // var stopPos = 100;
        // if(stopPos <= startPos){
        //     stopPos = startPos;
        // }
        var distance = 50; //uitlezen uit configuratie voorkant
        var stopPos = (parseInt(startPos) + parseInt(distance));

        var pos = startPos;
        var id = setInterval(frame, 5);   
        var direction = 1; // string up and down
        
        function frame() {
            if(direction == 1){
                if (pos >= stopPos) {
                    direction  = 0;
                } 
                else {
                        pos++;
                    } 
            }

            if (direction == 0){
                if (pos <= startPos) {
                    direction = 1;
                    // zet vast na het doen clearInterval(id);
                } 
                else {
                    pos--;
                }
            }

            el.style.top = pos + 'px'; 
            
        } // end function frame
            
            
    },
    startWiggle : function(el){
        alert('komt bij wiggle');

    },
    moveRight : function(el){
        
    }
};

var wiggles = document.getElementsByClassName('subtle-wiggle');
var bouncers = document.getElementsByClassName('subtle-bounce');

for(var i = 0; i< wiggles.length; i++) {
    subtle.startWiggle(wiggles[i]);

}

for(var i = 0; i< bouncers.length; i++) {
    subtle.startBounce(bouncers[i]);

}






