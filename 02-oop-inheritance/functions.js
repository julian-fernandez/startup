class EventEmitter {
 constructor() {
   this.events = {};
 }

 on( eventName, fn ) {
  if( !this.events[eventName] ) {
   this.events[eventName] = [];
 }

 this.events[eventName].push(fn);
}
emit(eventName, data) {
  const event = this.events[eventName];
  if( event ) {
    event.forEach(fn => {
     fn.call(null, data);
   });
  }
}
}


let emitter = new EventEmitter();
emitter.on('test', data => {
 console.log(data);
});

emitter.emit('test','ok');

class Movie extends EventEmitter{
  constructor(title, year, duration, cast) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = Array();
  }
  greeting() { // this is just a test
   return "My favorite movie is " + this.title + ". It came out in " + this.year;
 };

 play(){
  console.log(this.title + " is now playing");
};
pause(){
 console.log(this.title + " is now paused");
};
resume(){
 console.log(this.title + " has resumed playing");
};
addCast(actor){
  this.cast.push(actor);
  console.log(this.cast);
};
};


var twinPeaks = new Movie("Twin Peaks", 1992, 134);
var starWars = new Movie("Star Wars", 1977, 125);

document.getElementById("demo").innerHTML =
starWars.greeting(); 


class Logger{
  log(info){
    console.log(info);
  }
};
var logger = new Logger();

Movie.prototype = Object.create(EventEmitter.prototype);

var social = {
  share(name) {
    console.log(this.title + " shared with " + name);
  }
};

let newObj = Object.assign(twinPeaks, social);

class Actor{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


let luke = new Actor("Mark Hamill", 23);
let otherCast = [
new Actor("Harrison Ford", 29),
new Actor("Carrie Fisher", 28),
new Actor("Alec Guiness", 58)
]