import Colon from './libs/js/Colon.js';
// import * as d3 from 'd3';

export default class Rectum extends Colon {
    draw () {
        const data = this.data();

        const place = this.layer('foreground');

        place
            .selectAll('rect.x')
            .data([1], (d) => { return d; })
            .enter()
            .append('rect')
            .attr('class', 'x')
            .attr('x', function (d) { return 100; })
            .attr('y', function (d) { return 200; })
            .attr('width',  (d) => { return 300; })
            .attr('height', (d) => { return 400; })
            .attr('fill', '#fefefe');

        return this;
    }
}
