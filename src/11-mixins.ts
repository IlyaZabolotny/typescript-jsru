// Mixins
class Animal {
    feed(): void {}
}

class Movable {
    move(): void {}
}

class Horse {}
interface Horse extends Animal, Movable {}

type Construnctor = abstract new (...args: any) => any;

function applyMixins(child: Construnctor, parents: Construnctor[]): void {
    parents.forEach(parent => {
        Object.getOwnPropertyNames(parent.prototype).forEach(parentPropertyName => {
            child.prototype[parentPropertyName] = parent.prototype[parentPropertyName];
        })
    })
}

applyMixins(Horse, [Animal, Movable]);

const horse = new Horse();

horse.feed();