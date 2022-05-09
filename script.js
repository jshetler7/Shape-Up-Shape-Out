class Shape {
    constructor(width, height) {
        this.div = $(`<div class=""></div>`);
        this.width = width;
        this.height=  height;
        $('#sketchArea').append(this.div);
        this.div.css({
            position: 'absolute',
            left: '0px',
            top: '0px'
        }) 
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.div.addClass("square");
        let max = 600 - (0.5 * sideLength);
        let min = 0 + sideLength;
        this.div.css({
            height: this.height,
            width: this.width,
            left: `${randomX(max, min)}px`,
            top: `${randomY(max, min)}px`
        });
        this.div.dblclick(() => {
            this.div.remove();
            Swal.fire({
                icon: 'success',
                title: 'Hooray!',
                text: 'Well at least the shape is still there...shit!',
                footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Put the shape back?</a>'
              })
        })
        this.describe();
        }
    describe() {
        this.div.click(() => {
            $('#shapeID').val('Square');
            $('#widthID').val(this.width);
            $('#heightID').val(this.height);
            $('#perimeterID').val(this.width * 4);
            $('#areaID').val(this.width * this.height);
            $('#radiusID').val('N/A');
        })
    }
}


class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.div.addClass("circle");
        let max = 600 - radius;
        let min = 0 + radius;
        this.div.css({
            height: this.height,
            width: this.width,
            left: `${randomX(max, min)}px`,
            top: `${randomY(max, min)}px`
        })
        this.div.dblclick(() => {
            this.div.remove();
            Swal.fire({
                icon: 'success',
                title: 'Hooray!',
                text: 'Well at least the shape is still there...shit!',
                footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Put the shape back?</a>'
              })
        })
        this.describe();
    }
    describe() {
        this.div.click(() => {
            $('#shapeID').val('Circle');
            $('#widthID').val(this.width);
            $('#heightID').val(this.width);
            $('#perimeterID').val(2 * Math.PI * ((0.5 * this.width) ** 2));
            $('#areaID').val(2 * Math.PI * (0.5 * this.width));
            $('#radiusID').val(0.5 * this.width);
        })
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.addClass('rectangle');
        if(height > width) {
            console.log(height);
            let max = 600 - (0.5 * height);
            let min = 0 + height;
            this.div.css({
                height: this.height,
                width: this.width,
                left: `${randomX(max, min)}px`,
                top: `${randomY(max, min)}px`
            });
        } else {
            console.log(width);
            let max = 600 - (0.5 * width);
            let min = 0 + width;
            this.div.css({
                height: this.height,
                width: this.width,
                left: `${randomX(max, min)}px`,
                top: `${randomY(max, min)}px`
            });
        } 
        this.div.dblclick(() => {
            this.div.remove();
            Swal.fire({
                icon: 'success',
                title: 'Hooray!',
                text: 'Well at least the shape is still there...shit!',
                footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Put the shape back?</a>'
              })
        })
        this.describe();
        }
    describe() {
        this.div.click(() => {
            $('#shapeID').val('Rectangle');
            $('#widthID').val(this.width);
            $('#heightID').val(this.height);
            $('#perimeterID').val((this.width * 2) + (this.height * 2));
            $('#areaID').val(this.width * this.height);
            $('#radiusID').val('N/A');
        })
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height);
       let max = 590 - height;
       let min = 0;
       this.div.addClass('triangle');
        this.div.css({
            height: 0,
            width: 0,
            "border-bottom": `${height}px solid yellow`,
            "border-right": `${height}px solid transparent`,
            left: `${randomX(max, min)}px`,
            top: `${randomY(max, min)}px`
        });
        this.div.dblclick(() => {
            this.div.remove();
            Swal.fire({
                icon: 'success',
                title: 'Hooray!',
                text: 'Well at least the shape is still there...shit!',
                footer: '<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Put the shape back?</a>'
              })
        })
        this.describe();
    }
describe() {
    this.div.click(() => {
        $('#shapeID').val('Triangle');
        $('#widthID').val(this.width);
        $('#heightID').val(this.width);
        $('#perimeterID').val(2 * this.width + Math.sqrt(2) * this.width);
        $('#areaID').val(0.5 * this.width * this.width);
        $('#radiusID').val('N/A');
    })
}
}

$('#addSquare').click(function(evt) {
    evt.preventDefault();
    const sqSize = $('#sqSide').val();
    new Square(sqSize);
    $('#sqSide').val('');
});

$('#addCircle').click(function(evt) {
    evt.preventDefault();
    const circleRadius = $('#radius').val();
    new Circle(circleRadius);
    $('#radius').val('');
});

$('#addRectangle').click(function(evt) {
    evt.preventDefault();
    const rectangleHeight = $('#recHeight').val();
    const rectangleWidth = $('#recWidth').val();
    new Rectangle(rectangleWidth, rectangleHeight);
    $('#recHeight').val('');
    $('#recWidth').val('');
});

$('#addTriangle').click(function(evt) {
    evt.preventDefault();
    const triangleHeight = $('#triangleHeight').val();
    new Triangle(triangleHeight);
    $('#triangleHeight').val('');
})



function randomX(max, min) {
    return Math.floor(Math.random() * (max - min) + min);

};
function randomY(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
};