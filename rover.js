class Rover {
    constructor(coordX, coordY, orient){
        this.coordX = coordX;
        this.coordY = coordY;
        this.orient = orient;
    }

    move(string){
    letters = string.split('');
    if (string.match(/^\d+\s\d+(?:[NSEW])?$/)){
            coordXCoordYOrient = string.split(" ");
            this.coordX = coordXCoordYOrient[0];
            this.coordY = coordXCoordYOrient[1]:
            if (coordXCoordYOrient[2] != undefine) {
                this.orient = coordXCoordYOrient[2].ToUpperCase();
            } else {
                this.orient = "N";
            }
    } else {
        if (letters.match(/^[LMR]+$/)) {
        for (i=0; i < letters.length(); i++) {
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
            switch(this.orient.toLowerCase()){
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
            switch(this.orient.toLowerCase()){
                case n:
                    this.orient = "E";
                case s:
                    this.orient = "W";
                case e:
                    this.orient = "S";
                case w:
                    this.orient = "N";
            } 
        }
        } 
        return "Rover Position: (" + this.coordX + ", " + this.coordY + ")" + " Rover Orientation: " + this.orient; 
    }
}
            }
   } 
} //else formato no valido en el if del regex
            
        }
        
}
