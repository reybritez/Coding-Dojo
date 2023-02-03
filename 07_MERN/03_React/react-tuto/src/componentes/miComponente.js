import React, { Component } from 'react';

class MiNuevoComponente extends Component {
    render() {
        return (
            <div>
                {this.props.algunTexto}
            </div>
        );
    }
}

export default MiNuevoComponente;