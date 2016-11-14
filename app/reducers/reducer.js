import { combineReducers } from 'redux';

const initialState = {
    nodes: [],
    edges: [],
    svgWidth: 800,
    svgHeight: 600,
    mousePos: [null, null],
    lastFrameTime: null
};
