import { Component } from 'react';
import { createConnection } from './createConnection.jsx';

export default class ChatRoom extends Component {
    state = {
        serverUrl: 'https://localhost:1234'
    };

    componentDidMount() {
        this.setupConnection();
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.props.roomId !== prevProps.roomId ||
            this.state.serverUrl !== prevState.serverUrl
        ) {
            this.destroyConnection();
            this.setupConnection();
        }
    }

    componentWillUnmount() {
        this.destroyConnection();
    }

    setupConnection() {
        this.connection = createConnection(
            this.state.serverUrl,
            this.props.roomId
        );
        this.connection.connect();
    }

    destroyConnection() {
        this.connection.disconnect();
        this.connection = null;
    }

    render() {
        return (
            <>
                <label>
                    Server URL:{' '}
                    <input
                        value={this.state.serverUrl}
                        onChange={e => {
                            this.setState({
                                serverUrl: e.target.value
                            });
                        }}
                    />
                </label>
                <h1>¡Bienvenido a la sala {this.props.roomId}!</h1>
            </>
        );
    }
}
