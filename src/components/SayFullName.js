import React, { Component } from "react";

class SayFullName extends Component{
    state = {
        isOpen: false
    };

    render() {
        const body = this.state.isOpen && <a href={this.props.link}>Ссылка на профиль</a>;
        return (
            <div>
                <h1>
                    {this.props.name} {this.props.surname}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Закрыть' : 'Открыть'}
                    </button>
                </h1>
                {body}
            </div>
        )
    }
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default SayFullName;