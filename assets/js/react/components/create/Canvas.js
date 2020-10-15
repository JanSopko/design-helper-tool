import React from 'react';

export default class Canvas extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    handleClick(e) {
        console.log(e.clientX);
        console.log(e.clientY);
        this.canvas = window.document.getElementById('canvas');
        const ctx = this.canvas.getContext('2d');

        ctx.fillStyle = this.props.color;
        ctx.fillRect(0, 0, e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
        ctx.fillStyle = "#000000";
        ctx.strokeRect(0, 0, e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
    }

    render() {
        return (
            <canvas id="canvas" style={{height: '100%'}} onClick={e => this.handleClick(e)}>
            </canvas>
        );
    }
}