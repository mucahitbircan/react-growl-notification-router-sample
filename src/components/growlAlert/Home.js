import React, { Component } from 'react';
import { Button } from 'primereact/button';
import notifier from "./notifier";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    alert(severity) {
        switch (severity) {
            case "success":
                notifier.show({ severity: 'success', summary: 'Hello', detail: `From static function`, life: 4000 });
                return;
            case "error":
                notifier.show({ severity: 'error', summary: 'Hello', detail: `From static function`, life: 4000 });
                return;
            case "info":
                notifier.show({ severity: 'info', summary: 'Hello', detail: `From static function`, life: 4000 });
                return;
            default:
                notifier.show({ severity: 'error', summary: 'Hello', detail: `From static function`, life: 4000 });
                return;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ backgroundColor: "whitesmoke", display: "flex", flexDirection: "column", width: "200px" }} className="home-body">

                    <Button label="Success" className="p-button-success" onClick={() => { this.alert("success") }} />
                    <Button label="Info" className="p-button-info" onClick={() => { this.alert("info") }} />
                    <Button label="Warning" className="p-button-danger" onClick={() => { this.alert("error") }} />
                </div>
            </React.Fragment>
        )
    }
}
export default Home;