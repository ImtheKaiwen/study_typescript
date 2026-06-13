enum Direction{
    UP, //0
    DOWN,
    RIGHT,
    LEFT //3
}

let move = Direction.UP;
console.log(move);

enum StatusCode{
    SUCCESS = 200,
    FAILED = 400, //400
    UNAUTHORIZED,   //401 automatically increased 1
    SERVER_ERROR = 500
}

console.log(StatusCode.UNAUTHORIZED);

enum UserRole{
    ADMIN = 'ADMIN',
    WRITER = 'WRITER',
    MEMBER = 'MEMBER'
}

let currentRole : UserRole = UserRole.ADMIN;
if(currentRole === UserRole.ADMIN){
    console.log('Authotentication is successfull');
}


enum Days{
    MONDAY = 1,
    SUNDAY,
}

console.log(Days.MONDAY);
console.log(Days[1])


// performance enum
const enum Size{
    SMALL, //0
    MID,
    BIG
}

let drinkSize = Size.BIG;
console.log(drinkSize);