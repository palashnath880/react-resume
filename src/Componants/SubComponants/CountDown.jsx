import React, { Component } from 'react';

class CountDown extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    componentDidMount() {
        const { SkillPercent } = this.props;
        this.interVal = setInterval(() => {

            this.setState(prevState => ({
                count: this.state.count + 1,
            }));

            if (this.state.count === SkillPercent - 1) {
                clearInterval(this.interVal);
            }

        }, ( 1500 / SkillPercent ) );
    }

    componentWillUnmount() {
        clearInterval(this.interVal);
    }

    render() {
        const { count } = this.state; 
        return (
            <div className="count-bar color-1" style={{width: `${count}%`}}>
                <div className="count">
                    { `${count}%` }
                </div>
            </div>
        );
    }
}

export default CountDown;