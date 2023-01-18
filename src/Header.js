import React from 'react'

export class Header extends React.Component {
    
    render() { 
        const charClass = this.props.charClass;
        return (
            <h1>
          You have chosen {charClass}
        </h1>
        );
    }
}




