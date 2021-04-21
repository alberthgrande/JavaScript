// external javascript code for lightbulb
        // sw stands for switch
        function lightBulb(sw) {
            var onOff;
            if(sw == 0) {
                onOff = "lightbulb/pic_bulboff.gif";
            }
            else {
                onOff = "lightbulb/pic_bulbon.gif";
            }
            
            // 'myImage' are came from the id of img element in html
            document.getElementById('myImage').src = onOff;

        }
