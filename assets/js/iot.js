// ssh -i "TeatroRobot.pem" ubuntu@ec2-44-207-109-249.compute-1.amazonaws.com

const clientId = "ws" + Math.random();
// Create a client instance
const client = new Paho.MQTT.Client("44.207.109.249", 9001, clientId);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect, userName: 'randy',
password: 'teatro01'});


// called when the client connects
function onConnect() {
  console.log("Conectado");
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Conexión Perdida:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("Mensaje Recibido:"+message.payloadString);
}

// const client  = mqtt.connect('ws://44.207.109.249:9001/mqtt', {
//   username: 'randy',
//   password: 'teatro01'
// });

// client.on('connect', function () {
//   console.log('conectado');
//   client.subscribe('presence', function (err) {
//     if (!err) {
//       client.publish('presence', 'Hello mqtt')
//     }
//   })
// })

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })