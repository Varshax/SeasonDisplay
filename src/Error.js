import './App.css'

const Error = props => {
    return (
        <div className="error">
            <h1>Error: {props.msg}</h1>
            <h3>Please allow location to continue!</h3>
        </div>
    )
};

export default Error;