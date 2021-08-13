class Shape{
    drawshape(){
        console.log('shape is drawn')
    }
}
class Circle extends Shape{
    drawshape(){
        console.log('circle is drawn')
    }
}
class Quad extends Shape{
    drawshape(){
        console.log('quad is drawn')
    }
}
class Rect extends Quad{
    drawshape(){
        console.log('rect drawn')
    }
}
class square extends Rect{

}

var s:Shape = new Shape()
s.drawshape()
s=new Circle()
s.drawshape()
s=new Quad()
s.drawshape()
s=new Rect()
s.drawshape()
s=new square()
s.drawshape()