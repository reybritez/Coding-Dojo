import { Component } from 'react';
import styles from '../css/Main.module.css';
import SubContent from './Subcontent';
import Advertisement from './Advertisement'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "Main"
        };
    }
    
    render() {
        return (
                <div className={styles.main}>
                    <div className={styles.cols}> 
                    <SubContent />
                    <SubContent />
                    <SubContent />
                    </div>
                    <Advertisement />
                </div>
        );
    }
}
                
export default Main;