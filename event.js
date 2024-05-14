const event = require('events')

//create an object for thw event Emitter class
const eventEmitter = new event.EventEmitter()


//create event - on()
//first argument should be name of the event and second argument should logic
eventEmitter.on('onDisplay',()=>{
    //logic
    console.log('inside the event');
})

//execute - emit()
eventEmitter.emit('onDisplay')