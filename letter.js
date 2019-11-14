function Letter (ch){
    this.str=ch,
    this.isGuessed=false;
    this.letterGuessed =function(){

        if(this.isGuessed)
            return this.str
        else {
            if(this.str !==" ")
                return " _ ";
            else
                return this.str;      
        } 
    }
    this.guess= function(char)
    {
        if(this.str === char){
            this.isGuessed=true; 
        }
       
    }
}




module.exports = Letter;