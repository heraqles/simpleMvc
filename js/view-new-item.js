/**
 * Created by heraqles on 08.06.16.
 */


function ViewNewItem(container) {

    this.controls = this.createList(container);
    console.log(this);
    window.Obj = this;

    this.controls.btnAdd.addEventListener('click', function () {
        var results = {
            name: this.controls.name.value,
            phone: this.controls.phone.value
        };
        results.name && this.addItem(results);
        console.log(results);
    }.bind(this));



}

ViewNewItem.prototype.createList = function (appendDiv) {

    var html = '<form class="well hidden">\
            <label>name:<input class="form-control" name="name" type="text" autofocus></label>\
            <label>phone:<input class="form-control" name="phone" type="number"></label>\
            <button class="btn" type="button">add item</button>\
            </form>';


    var container = document.createElement('div');
    container.innerHTML = html;
    this.el = container.lastChild;
    console.log(this.el);
    var target = document.querySelector(appendDiv);

    target.appendChild(container);

    return{
        name: this.el.name,
        phone: this.el.phone,
        btnAdd: this.el.querySelector('button')
    }

};

ViewNewItem.prototype.show = function () {
    this.el.classList = "well show";
};