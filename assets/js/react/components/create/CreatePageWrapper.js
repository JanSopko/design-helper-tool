import React from 'react';
import Footer from "../Footer";
import Canvas from "./Canvas";

export default class CreatePageWrapper extends React.Component {
    constructor() {
        super();

    }


    render() {
        return(
            <div id="content">
                <section style={{height: 200}} onClick={this.onHandleClick} >
                    <Canvas w="50" h="70">
                    </Canvas>
                </section>
                <Footer>
                </Footer>
            </div>
        );
    }
}

