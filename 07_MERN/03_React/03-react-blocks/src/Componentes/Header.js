import { Component } from 'react';
import styles from '../css/Header.module.css';
                
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Header"
        };
    }
    
    render() {
        return (
                <div className={styles.header}>
                </div>
        );
    }
}
                
export default Header;