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
test('fitting: parson have a grandchild', () => {
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

    expect(data.size).toMatchObject({
        w:  740,
        h: 1040,
    });
});
