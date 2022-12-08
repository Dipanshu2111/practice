const EventEmitted = require ('events');

class events extends EventEmitted {}

const myEvent = new events ();

myEvent.on('Motoroff', () => {
    console.log('Please turn off the motor');
    });
    
    myEvent.emit('Motoroff');