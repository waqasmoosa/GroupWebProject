/******************************************************

            Register button listener and get the img elements

         ******************************************************/
            function start() {

                // setup buttons
                var button4 = document.getElementById( "rollFourSide" ); // use button id
                var button6 = document.getElementById( "rollSixSide" );
                var button8 = document.getElementById( "rollEightSide" );
                var button10 = document.getElementById( "rollTenSide" );
                var button12 = document.getElementById( "rollTwelveSide" );
                var button20 = document.getElementById( "rollTwentySide" );
    
    
                button4.addEventListener( "click", rollFourSide, false );
                button6.addEventListener( "click", rollSixSide, false );
                button8.addEventListener( "click", rollEightSide, false );
                button10.addEventListener( "click", rollTenSide, false );
                button12.addEventListener( "click", rollTwelveSide, false );
                button20.addEventListener( "click", rollTwentySide, false );
    
    
                die4_Image = document.getElementById( "die4" );  // use image id
                die6_Image = document.getElementById( "die6" );
                die8_Image = document.getElementById( "die8" );
                die10_Image = document.getElementById( "die10" );
                die12_Image = document.getElementById( "die12" );
                die20_Image = document.getElementById( "die20" );
             }
    
             /********************************
    
                Roll and set dice functions
    
             *********************************/
    
             // Four Sided
             function rollFourSide() { setFourSide( die4_Image ); } // roll the dice
             function setFourSide( dieImg ) // set src 
             {
                var dieValue = Math.floor( 1 + Math.random() * 4 );
                dieImg.setAttribute( "src", "d4(" + dieValue + ").png" );
                dieImg.setAttribute( "alt", 
                   "die image with " + dieValue + " spot(s)" );
             }
    
             // Six Sided
             function rollSixSide() { setSixSide( die6_Image ); } 
             function setSixSide( dieImg ) 
             {
                var dieValue = Math.floor( 1 + Math.random() * 6 );
                dieImg.setAttribute( "src", "d6(" + dieValue + ").png" );
                dieImg.setAttribute( "alt", 
                   "die image with " + dieValue + " spot(s)" );
             }
    
             // Eight Sided
             function rollEightSide() { setEightSide( die8_Image ); } 
             function setEightSide( dieImg ) 
             {
                var dieValue = Math.floor( 1 + Math.random() * 8 );
                dieImg.setAttribute( "src", "d8(" + dieValue + ").png" );
                dieImg.setAttribute( "alt", 
                   "die image with " + dieValue + " spot(s)" );
             }
    
             // Ten Sided
             function rollTenSide() { setTenSide( die10_Image ); } 
             function setTenSide( dieImg ) 
             {
                var dieValue = Math.floor( 1 + Math.random() * 10 );
                dieImg.setAttribute( "src", "d10(" + dieValue + ").png" );
                dieImg.setAttribute( "alt", 
                   "die image with " + dieValue + " spot(s)" );
             }
    
             // Twelve Sided
             function rollTwelveSide() { setTwelveSide( die12_Image ); } 
             function setTwelveSide( dieImg ) 
             {
                var dieValue = Math.floor( 1 + Math.random() * 12 );
                dieImg.setAttribute( "src", "pentdice" + dieValue + ".png" );
                dieImg.setAttribute( "alt", 
                   "die image with " + dieValue + " spot(s)" );
             }
    
             // Twenty Sided
             function rollTwentySide() { setTwentySide( die20_Image ); } 
             function setTwentySide( dieImg ) 
             {
                var dieValue = Math.floor( 1 + Math.random() * 20 );
                dieImg.setAttribute( "src", "hexadice" + dieValue + ".png" );
                dieImg.setAttribute( "alt", 
                   "die image with " + dieValue + " spot(s)" );
             }
    
    
             window.addEventListener( "load", start, false );