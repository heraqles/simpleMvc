/**
 * Created by heraqles on 08.06.16.
 */

function Model(data){
    
    this.data = data;

}
Model.prototype.getData = function () {
    return this.data;
};
Model.prototype.addItem = function (item) {
    this.data.push(item);
    this.itemsChanged();
};

Model.prototype.removeItem = function (itemSelected) {
    this.data.splice(itemSelected, 1);
    this.itemsChanged();
};

Model.prototype.itemsChanged = function () {
    throw "You should overwrite it in View";
};