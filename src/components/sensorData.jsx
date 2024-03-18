function SensorData({data}) {
    
    return (
        <div>
            <p>
                {data.name}
            </p>
            <p>
                {data.number}
            </p>
        </div>
    );
}

export default SensorData