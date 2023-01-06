import { Component } from 'react';
import styles from '../css/Advertisement.module.css'
                
class Advertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Advertisement"
        };
    }
    
    render() {
        return (
                <div className={styles.advertisement}>
                </div>
        );
    }
}
                
export default Advertisement;