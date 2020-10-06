import React from 'react';
import Footer from "../Footer";

export default class CreatePageWrapper extends React.Component {
    constructor() {
        super();

    }

    componentDidMount () {
        this.canvas = window.document.getElementById('canvas');
        const ctx = this.canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.fillRect(10, 10, 150, 100);
    }

    onHandleClick  () {
        const ctx = this.canvas.getContext('2d');

        ctx.fillStyle = 'red';
        ctx.fillRect(10, 15, 150, 100);
    }

    render() {
        return(
            <div id="content">
                <section style={{height: 200}} onClick={this.onHandleClick} >
                    <canvas id="canvas" style={{height: '100%'}}>
                    </canvas>
                </section>
                <Footer>
                </Footer>
            </div>
        );
    }
}

