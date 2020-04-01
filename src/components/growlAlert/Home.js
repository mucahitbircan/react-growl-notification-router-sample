import React, { Component } from 'react';
import notifier from "./notifier";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    alert(severity){
        // eslint-disable-next-line default-case
        switch (severity) {
            case "success":
                notifier.show({ severity: 'success', summary: 'HELLO', detail: `from static function`,life:4000});
                return;
            case "error":
                notifier.show({ severity: 'error', summary: 'HELLO', detail: `from static function`,life:4000});
                return;
            case "info":
                notifier.show({ severity: 'info', summary: 'HELLO', detail: `from static function`,life:4000});
                return;
        }
    }

    render(){
        return(
            <React.Fragment>
                <div style={{ backgroundColor: "whitesmoke"}} className="home-body">
                    <button  onClick={ () => {this.alert("success")}}>
                        Success
                    </button>
                    <button  onClick={() => {this.alert("error")}}>
                        ERROR
                    </button>
                    <button  onClick={() => {this.alert("info")}}>
                        INFO
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
    export default Home;