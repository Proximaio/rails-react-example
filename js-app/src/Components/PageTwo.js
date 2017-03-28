import React, { Component } from 'react';

class PageTwo extends Component {

    render() {
        return (
            <div className="App">
                <p>Page Two</p>
                <a href="/react/foo">Foo</a>
                <a href="/react/bar">Bar</a>
                <a href="/baz">Non React Baz</a>
                <a href="/react/baz">React baz</a>
            </div>
        );
    }
}

export default PageTwo;
