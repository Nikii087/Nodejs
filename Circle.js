// Circumfernce of circle

function Circle(radius)
{
    return{
        Circumfernce:function circumfernce() {
            return Math.PI*radius*radius;
            
        }
    };
}
    module.exports=Circle;