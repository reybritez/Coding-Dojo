import { Component } from 'react';
import styles from '../css/Navigation.module.css';
                
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Navigation"
        };
    }
    
    render() {
        return (
                <div className={styles.navigation}>
                </div>
        );
    }
}
                
export default Navigation;