import React from 'react';

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.canvas = window.document.getElementById('canvas');
        const ctx = this.canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, this.props.w, this.props.h);
    }

    render() {
        return (
            <canvas id="canvas" style={{height: '100%'}} onClick={e => {console.log(e)}}>
            </canvas>
        );
    }
}