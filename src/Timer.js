import React, {Component} from 'react';

export class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div>
                <h1>
                    {document.body[0]}
                </h1>
                <h1>
                    It's time:
                </h1>
                <h2>
                    {this.state.date.toLocaleTimeString()}
                </h2>
            </div>
        )
    }
}