// @ts-check

// Granim.js
// @ts-ignore
let granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#92ad54', '#a52c2e']
            ]
        }
    }
});

