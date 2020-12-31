import D3Svg, {Camera} from '@yanqirenshi/d3.svg';

import Background from './data/Background.js';
import Font       from './data/Font.js';
import Position   from './data/Position.js';
import Rectangle  from './data/Rectangle.js';
import Stroke     from './data/Stroke.js';
import Label      from './data/Label.js';
import Padding    from './data/Padding.js';
import Hierarchy  from './Hierarchy.js';
import Geometry   from './Geometry.js' ;

export {
    Camera,
    Hierarchy,
    Geometry,
    Background,
    Font,
    Position,
    Rectangle,
    Stroke,
    Padding,
    Label,
};

export default class Asshole {
    constructor (params) {
        this._d3svg = new D3Svg();
        this._d3svg.selector(params.selector);

        if (params.camera)
            this.camera(params.camera);

        this._layerForeground = null;
        this._layerBackground = null;
    }
    /** *************************************************************** */
    /*  Getter Setter                                                   */
    /* **************************************************************** */
    bounds (v) {
        if (arguments.length===0)
            return this._d3svg.bounds();

        return this._d3svg.bounds(v);
    }
    camera (v) {
        if (arguments.length===0)
            return this._d3svg.camera();

        return this._d3svg.camera(v);
    }
    d3svg () {
        if (this._d3svg.d3Element())
            return this._d3svg;

        this.setting();

        return this._d3svg;
    }
    svgElement () {
        return this.d3svg().d3Element();
    }
    getSvgElement () {
        console.warn('getSvgElement は廃止予定です。svgElement を利用してください。');
        return this.d3svg().d3Element();
    }
    /** *************************************************************** */
    /*  SVG                                                             */
    /* **************************************************************** */
    setting (selector) {
        this.settingBefore();
        this.makeSvgBefore(); // 廃棄予定

        this._d3svg.setting();

        this.settingLayers();
        this.settingArrow();

        this.makeSvgAfter(); // 廃棄予定
        this.settingAfter();

        return this;
    }
    // 廃棄予定
    makeSvgBefore () {}
    // 廃棄予定
    makeSvgAfter () {}
    settingBefore () {}
    settingAfter () {}
    settingArrow () {
        const svg = this.svgElement();

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
    /** *************************************************************** */
    /*  Layers                                                          */
    /* **************************************************************** */
    settingLayers () {
        const layers = [
            { id: 1, name: 'background' },
            { id: 2, name: 'foreground' },
        ];

        this.svgElement()
            .selectAll('g.layer')
            .data(layers, (d) => { return d.id; })
            .enter()
            .append('g')
            .attr('class', (d) => {
                return 'layer ' + d.name;
            });
    }
    layerForeground () {
        if (this._layerForeground)
            return this._layerForeground;

        let svg = this.svgElement();

        this._layerForeground = svg.select('g.layer.foreground');

        return this._layerForeground;
    }
    layerBackground () {
        if (this._layerBackground)
            return this._layerBackground;

        let svg = this.svgElement();

        this._layerBackground = svg.select('g.layer.background');

        return this._layerBackground;
    }
    // 廃棄予定
    getLayerForeground () {
        console.warn('getLayerForeground は廃止予定です。layerForeground を利用してください。');

        if (this._layerForeground)
            return this._layerForeground;

        let svg = this.svgElement();

        this._layerForeground = svg.select('g.layer.foreground');

        return this._layerForeground;
    }
    // 廃棄予定
    getLayerBackground () {
        console.warn('getLayerBackground は廃止予定です。layerBackground を利用してください。');

        if (this._layerBackground)
            return this._layerBackground;

        let svg = this.svgElement();

        this._layerBackground = svg.select('g.layer.background');

        return this._layerBackground;
    }
    /** *************************************************************** */
    /*  focus                                                           */
    /* **************************************************************** */
    focus () {
        this.d3svg().focus();
    }
    /** *************************************************************** */
    /*  data                                                            */
    /* **************************************************************** */
    data (data) {
        return this;
    }
}
