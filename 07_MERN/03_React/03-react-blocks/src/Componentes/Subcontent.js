import { Component } from 'react';
import styles from '../css/Subcontent.module.css'
                
class SubContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "SubContent"
        };
    }
    
    render() {
        return (
                <div className={styles.col}>
                </div>
        );
    }
}
                
export default SubContent;