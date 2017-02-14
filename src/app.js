import Person from './person';

class Friend extends Person{
    constructor(name) {
      super(name);
    }
    callName() {
      console.log(this.name);
    }
}

var friend = new Friend('Musashi.Miyamoto');

friend.callName();