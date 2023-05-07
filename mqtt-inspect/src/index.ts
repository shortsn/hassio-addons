import { connect } from 'async-mqtt';

const { MQTT_HOST, MQTT_PORT, MQTT_USER, MQTT_PASSWORD } = process.env

console.log('starting')
console.log(MQTT_HOST, MQTT_PORT, MQTT_USER, MQTT_PASSWORD)

const client = connect(`mqtt://${MQTT_HOST}`, {
    username: MQTT_USER,
    password: MQTT_PASSWORD,
    port: typeof MQTT_PORT === 'string' ? parseInt(MQTT_PORT, 10) : undefined
});

const doStuff = async () => {
    console.log('Connected')
    try {
        const grants = await client.subscribe('#')
        console.log('subscribed')
    } catch (e) {
        // Do something about it!
        console.log(e.stack);
        process.exit();
    }
}

client.on("connect", doStuff);

client.on('message', (topic, payload) => {
    console.log('Received Message:', topic, payload.toString())
})