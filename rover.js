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
            }
            
        }
        
}
