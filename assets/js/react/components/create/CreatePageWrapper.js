import React from 'react';
import Footer from "../Footer";
import Canvas from "./Canvas";
import InputColor from 'react-input-color';

export default class CreatePageWrapper extends React.Component {
    constructor() {
        super();

        this.state = {
            color: '#000000',
            confirmedColor: '#000000',
            confirmedWidth: '0',
            confirmedHeight: '0'
        }
    }

    handleClick(e) {
        const newColor = this.state.color;
        const newHeight = e.clientY + 'px';
        const newWidth = e.clientX + 'px';
        this.setState({
            color: newColor,
            confirmedColor: newColor,
            confirmedHeight: newHeight,
            confirmedWidth: newWidth
        });
    }

    render() {
        return(
            <div id="content">
                <div id="canvas-menu">
                    <InputColor
                        initialValue={this.state.color}
                        placement="right"
                        onChange={e => this.setState({color: e.hex})}
                    />
                </div>
                <section
                    style={{height: 200}}
                    id="canvas-section"
                    onClick={(e) => this.handleClick(e)}
                >
                    <Canvas color={this.state.color}>
                    </Canvas>
                    <pre>
                        .css: <br/>
                        <span>
                            #custom-element {"{\n" +
                        "\tbackground-color:" + this.state.confirmedColor + ";\n" +
                        "\twidth:" + this.state.confirmedWidth + ";\n" +
                        "\theight:" + this.state.confirmedHeight + ";\n" +
                        "}"}
                        </span>
                    </pre>
                </section>
                <Footer>
                </Footer>
            </div>
        );
    }
}

