function getFirstElement(array: number[]){
    return array[0];
}

let array : number[] = [1,2,3,4];
let first : number = getFirstElement(array);

console.log(first);

// generic

function getFirst<T>(array: T[]): T {
    return array[0];
}

let stringArray : string[] = ['kerem','ayse','murat'];
let numberArray : number[] = [1,2,3,4,5,6];

console.log(getFirst(stringArray));
console.log(getFirst(numberArray)); // there is no error


// generic types & custom types

interface ApiResponse<T> {
    data: T;
    status: string;
    success: boolean;
}

type UserProfile = {
    username: string,
    email: string,
}

type ProductItem = {
    title: string,
    price: number,
}

const userResponse : ApiResponse<UserProfile> = {
    data: {username: 'kerem', email: 'kerem@gmail.com'},
    status: 'success',
    success: true
}

const productResponse : ApiResponse<ProductItem> = {
    data: {price: 4000, title: 'Phone'},
    status: 'success',
    success: true
}

console.log(userResponse);
console.log(productResponse);

// generic constraints

interface IhasId {
    id: string | number;
}

function logItemIdentity<T extends IhasId>(item: T): void {
    console.log(`The item ID : ${item.id}`);
}

logItemIdentity({id: 'user-897', name: 'Alice'});


// Generic Classes

class CloudStorage<T> {
    private items: T[] = [];

    public add(newItem: T): void {
        this.items.push(newItem);
    }

    public getAll(): T[]{
        return this.items;
    }
}

const textStorage : CloudStorage<String> = new CloudStorage<String>();
textStorage.add('Local data added');
// textStorage.add(4); not gonna work