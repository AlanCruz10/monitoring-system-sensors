import "../assets/styles/card.css"

function Card (props) {
    let componentClass = "";
    
    if(props.state) {
        componentClass = "sensor-ds18b20"
    } else {
        componentClass = "sensor-dhtc11"
    }

    return (
        <div className={componentClass}>
            {props.state ? (
                <>
                    <h2>{props.sensor_name}</h2>
                    <p className="sensor-value">{props.sensor_value}</p>
                    <div className="image-value">
                        <img src="thermometer.png"/>
                    </div>
                    <p className="sensor-description">{props.sensor_description}</p>
                </>
            ) : (
                <>
                    <h2>{props.sensor_name}</h2>
                    <div className="sensors-area">
                        <div className="humidity">
                            <p className="sensor-value">{props.sensor1_value}</p>
                            <div className="image-value">
                                <img src="thermometer.png"/>
                            </div>
                            <p className="sensor-description">{props.sensor1_description}</p>
                        </div>
                        <div className="temperature">
                            <p className="sensor-value">{props.sensor2_value}</p>
                            <div className="image-value">
                                <img src="humidity.png"/>
                            </div>
                            <p className="sensor-description">{props.sensor2_description}</p>
                        </div>
                    </div>
                </>
            )}
            
            {props.children}
        </div>
    );
}

export default Card;