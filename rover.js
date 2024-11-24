class Rover {
    constructor(coordX, coordY, orient){
        this.coordX = coordX;
        this.coordY = coordY;
        this.orient = orient;
    }

    move(string){
    letters = string.split('');
        if(letters[i].toLowerCase() === "m" ){
            switch(this.orient.toLowerCase()){
                case n:
                    this.coordY += 1;
                case s:
                    this.coordY -=1;
                case e:
                    this.coordX += 1;
                case w:
                    this.coordX -=1;
            }
        } else if (letters[i].toLowerCase() === "l" ){
            switch(this.orient){
                case n:
                    this.orient = "W";
                case s:
                    this.orient = "E";
                case e:
                    this.orient = "N";
                case w:
                    this.orient = "S";
            }     
        } else if (letters[i].toLowerCase() === "r" ){
            switch(this.orient){
                case n:
                    this.orient = "E";
                case s:
                    this.orient = "W";
                case e:
                    this.orient = "S";
                case w:
                    this.orient = "N";
            } 
        } else if (string.match(/^\d+\s\d+(?:\s\w)?$/)){
            this.coordX = letters[0];
            this.coordY = letters[1];
            if (letters[2] != undefined){
                this.orient = letters[2];
            } 
        }
        return "Rover Position: (" + this.coordX + ", " + this.coordY + ")" + " Rover Orientation: " + this.orient; 
    }
}
            }
            
        }
        
}
