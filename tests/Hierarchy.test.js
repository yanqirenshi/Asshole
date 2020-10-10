import {Hierarchy} from "../index.js";
const it = new Hierarchy();

/////
///// Position
/////
test('fitting: alone', () => {
    const position = { x: 100, y: 200 };
    const data = {
        position: {...position},
    };

    it.fitting(data);

    expect(data._position).toMatchObject(position);
});

test('fitting: child', () => {
    const position = { x: 100, y: 200 };
    const child = {
        position: {...position},
    };
    const data = {
        position: {...position},
        children: [child],
    };

    it.fitting(data);

    expect(data._position).toMatchObject({
        x: position.x,
        y: position.y,
    });

    expect(data.children[0]._position).toMatchObject({
        x: position.x + position.x,
        y: position.y + position.y,
    });
});

test('fitting: child with padding', () => {
    const position = { x: 100, y: 200 };
    const padding = 10;

    const child = {
        position: {...position},
    };
    const data = {
        position: {...position},
        padding: padding,
        children: [child],
    };

    it.fitting(data);

    expect(data._position).toMatchObject({
        x: position.x,
        y: position.y,
    });

    expect(data.children[0]._position).toMatchObject({
        x: position.x + position.x + padding,
        y: position.y + position.y + padding,
    });
});

/////
/////
/////
test('fitting: have a child', () => {
    const position = { x: 100, y: 200 };
    const size = { w: 100, h: 200 };
    const padding = 10;
    const child ={
        position: { x: 0, y: 0 },
        size: { w: 200, h: 300 },
    };
    const data = {
        position: {...position},
        size: {...size},
        padding: padding,
        children: [child],
    };

    it.fitting(data);

    expect(data._size).toMatchObject({
        w: padding + child.size.w + padding, // 220
        h: padding + child.size.h + padding, // 320
    });
});

test('fitting: have a children', () => {
    const padding = 10;
    const data = {
        position: { x: 100, y: 200 },
        size: { w: 100, h: 200 },
        padding: padding,
        children: [
            { position: { x: 100, y: 200 }, size: { w: 300, h: 400 } },
            { position: { x: 300, y: 400 }, size: { w: 500, h: 600 } },
        ],
    };

    it.fitting(data);

    expect(data._size).toMatchObject({
        w:  820,
        h: 1020,
    });
});

test('fitting: have a grandchild', () => {
    const padding = 10;
    const data = {
        code: 'node1',
        position: {...{ x: 100, y: 200 }},
        size: {...{ w: 200, h: 300 }},
        padding: padding,
        children: [
            {
                code: 'node2',
                position: { x: 100, y: 200 },
                size: { w: 300, h: 400 },
                padding: padding,
                children: [
                    {
                        code: 'node3',
                        position: {...{ x: 200, y: 300 }},
                        size: {...{ w: 400, h: 500 }}
                    },
                ],
            },
        ],
    };

    it.fitting(data);

    expect(data._size).toMatchObject({
        w:  740,
        h: 1040,
    });
});
