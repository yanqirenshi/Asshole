// https://chaika.hatenablog.com/entry/2019/07/16/083000

import {Background} from "../index.js";

const it = new Background();

test('template', () => {
    expect(it.template()).toMatchObject({
        color: '#fff',
        opacity: 1.0,
    });
});

test('build: arg is empty', () => {
    expect(it.build()).toMatchObject(it.template());
});

test('build: arg is empty', () => {
    const data = {
        color: '#f00',
        opacity: 2.0,
    };

    expect(it.build(data)).toMatchObject(data);
});

test('build: arg is empty', () => {
    const data = {
        color: '#f00',
        opacity1: 2.0,
    };
    const got = {
        color: '#f00',
        opacity: 1.0,
    };

    expect(it.build(data)).toMatchObject(got);
});

test('build: arg is empty', () => {
    const data = {
        color1: '#f00',
        opacity: 2.0,
    };
    const got = {
        color: '#fff',
        opacity: 2.0,
    };

    expect(it.build(data)).toMatchObject(got);
});
