function Storage(){
    this.dateStore = {};
}

Storage.prototype.put = function(key, data){
    this.dateStore[key] = data;
}

Storage.prototype.getData = function(key){
    return this.dateStore[key];
}

const productStorage = new Storage();
productStorage.put('id001', {name:'키보드', price:2000});
console.log(productStorage.getData('id001'));
console.log(productStorage);

function RemovableStorage(){
    Storage.call(this);
}

RemovableStorage.prototype = Object.create(Storage.prototype);

RemovableStorage.prototype.removeAll = function(){
    this.dateStore = {};
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001', {name:'키보드', price:2000});
productStorage2.removeAll();

const item = productStorage2.getData('id001');
console.log(item);