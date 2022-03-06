import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#052C48',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer'
    }
}

class Button extends Component{
    render() {
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button;