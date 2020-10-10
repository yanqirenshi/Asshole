// https://chaika.hatenablog.com/entry/2019/07/16/083000

import Asshole, * as Ass from "../index.js";

test('Check Class Instance', () => {
    const asshole = new Asshole();

    expect(asshole.hasOwnProperty('selector')).toBeTruthy();
    expect(asshole.hasOwnProperty('w')).toBeTruthy();
    expect(asshole.hasOwnProperty('h')).toBeTruthy();
    expect(asshole.hasOwnProperty('look')).toBeTruthy();
    expect(asshole.hasOwnProperty('scale')).toBeTruthy();
    expect(asshole.hasOwnProperty('_d3svg')).toBeTruthy();
    expect(asshole.hasOwnProperty('_layerForeground')).toBeTruthy();
    expect(asshole.hasOwnProperty('_layerBackground')).toBeTruthy();

    expect(asshole.constructor.name).toBe('Asshole');
    expect(asshole.selector).toBeNull();
    expect(asshole.w).toBe(0);
    expect(asshole.h).toBe(0);
    expect(asshole.look).toMatchObject({ at: { x:0, y:0 }, });
    expect(asshole.scale).toBe(1);
    expect(asshole._d3svg).toBeNull();
    expect(asshole._layerForeground).toBeNull();
    expect(asshole._layerBackground).toBeNull();
});
