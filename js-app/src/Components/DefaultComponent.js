import React, { Component } from 'react';

class DefaultComponent extends Component {

    render() {
        return (
            <div className="App">
                <p>The Default Component</p>
                <a href="/react/foo">Foo</a>
                <a href="/react/bar">Bar</a>
                <a href="/baz">Non React Baz</a>
                <a href="/react/baz">React baz</a>
            </div>
        );
    }
}

export default DefaultComponent;
