class Chart{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width, height){
        super(width, height);
    }

    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barchart`);
    }
}

const barchart = new BarChart(100,100);
barchart.draw();