
const { MQTT_HOST, MQTT_USER, MQTT_PASSWORD } = process.env

console.log('starting')
console.log(MQTT_HOST, MQTT_USER, MQTT_PASSWORD)

// const client = connect("tcp://somehost.com:1883");

// const doStuff = async () => {

//     console.log("Starting");
//     try {
//         await client.publish("wow/so/cool", "It works!");
//         // This line doesn't run until the server responds to the publish
//         await client.end();
//         // This line doesn't run until the client has disconnected without error
//         console.log("Done");
//     } catch (e) {
//         // Do something about it!
//         console.log(e.stack);
//         process.exit();
//     }
// }

// client.on("connect", doStuff);