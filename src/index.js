import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class BulletList extends React.Component {
    render() {
        return (
        <div>
            <h1>Bullet List for{this.props.name}</h1>
            <ul>
                <li>Ingredient One</li>
                <li>Ingredient Two</li>
                <li>Ingredient Three</li>
            </ul>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BulletList />);