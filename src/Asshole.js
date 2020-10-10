import D3Svg from '@yanqirenshi/d3.svg';

import Background from './data/Background.js';
import Font       from './data/Font.js';
import Position   from './data/Position.js';
import Rectangle  from './data/Rectangle.js';
import Stroke     from './data/Stroke.js';

export {
    Background,
    Font,
    Position,
    Rectangle,
    Stroke
};

export default class Asshole {
    constructor () {
        this.selector = null;
        this.w = 0;
        this.h = 0;
        this.look = { at: { x:0, y:0 }, };
        this.scale = 1;

        this._d3svg = null;
        this._layerForeground = null;
        this._layerBackground = null;
    }
    init (params) {
        this.initSvg(params);
        return this;
    }
    initSvg (params) {
        this.selector = params.svg.selector;
        this.w = params.svg.w || 0;
        this.h = params.svg.h || 0;
        this.look = params.svg.look || { at: { x:0, y:0 }, };
        this.scale = params.svg.scale || 1;
    }
    /* ******** */
    /*  SVG     */
    /* ******** */
    makeSvg () {
        let d3svg = new D3Svg();

        d3svg.init({
            d3_element: this.selector,
            w:     this.w,
            h:     this.h,
            look:  this.look,
            scale: this.scale,
        });

        return d3svg;
    }
    makeArrow () {
        const svg = this.getSvgElement();

        var marker = svg
            .append("defs") // TODO: さがせよ
            .append("marker")
            .attr('id', "edge-arrow")
            .attr('refX', 15)
            .attr('refY', 5)
            .attr('markerWidth', 10)
            .attr('markerHeight', 10)
            .attr('orient', "auto");

        // 矢印の形をpathで定義します。
        marker.append("path")
            .attr('d', "M 0,0 V 10 L10,5 Z")
            .attr('fill', "#333");
    }
    getSvg () {
        if (this._d3svg)
            return this._d3svg;

        this._d3svg = this.makeSvg();

        this.makeLayers();
        this.makeArrow();

        return this._d3svg;
    }
    getSvgElement () {
        return this.getSvg().d3Element();
    }
    focus () {
        this.getSvg().focus();
    }
    /* ******** */
    /*  Layers  */
    /* ******** */
    makeLayers () {
        const layers = [
            { id: 1, name: 'background' },
            { id: 2, name: 'foreground' },
        ];

        this.getSvgElement()
            .selectAll('g.layer')
            .data(layers, (d) => { return d.id; })
            .enter()
            .append('g')
            .attr('class', (d) => {
                return 'layer ' + d.name;
            });
    }
    getLayerForeground () {
        if (this._layerForeground)
            return this._layerForeground;

        let svg = this.getSvgElement();

        this._layerForeground = svg.select('g.layer.foreground');

        return this._layerForeground;
    }
    getLayerBackground () {
        if (this._layerBackground)
            return this._layerBackground;

        let svg = this.getSvgElement();

        this._layerBackground = svg.select('g.layer.background');

        return this._layerBackground;
    }
    /* ******** */
    /*  Data  */
    /* ******** */
    data (data) {
        return this;
    }
}
