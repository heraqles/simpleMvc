/**
 * Created by heraqles on 08.06.16.
 */

function ViewList(model, container) {

    this.model = model;
    this.controls = this.createList(container);

    this.controls.btnNew.addEventListener('click', function () {
        this.newItem();
        
    }.bind(this));

    this.controls.btnDelete.addEventListener('click', function () {
        this.removeItem(this.controls.selectedIndex);
    }.bind(this));


    this.model.itemsChanged = function() {
        this.renderList();
    }.bind(this);


}

ViewList.prototype.createList = function (appendDiv) {

    var html = '<div class="row">\
        <h4 class="col-lg-12">phone: <span class="output"></span></h4>\
        <div class="col-lg-9">\
        <select class="form-control list" size="15"></select>\
        </div>\
        <div class="col-lg-3">\
        <button class="btn btn-default btn-block btn-new">+</button>\
        <button class="btn btn-default btn-block btn-delete">-</button>\
        </div>\
        </div>';

    var container = document.createElement('div');
    container.innerHTML = html;
    this.el = container.lastChild;
    console.log(this.el);
    var target = document.querySelector(appendDiv);

    target.appendChild(container);

    return {
        list: this.el.querySelector('.list'),
        btnNew: this.el.querySelector('.btn-new'),
        btnDelete: this.el.querySelector('.btn-delete'),
        output: this.el.querySelector('.output')
    };

};

ViewList.prototype.newItem = function () {
    throw 'This method should be overwrite in controller';
};

ViewList.prototype.removeItem = function () {
    throw 'This method should be overwrite in controller';
};

ViewList.prototype.renderList = function () {
    console.log("Test");
    this.controls.list.options.length = 0;
    var items = this.model.getData();
    items.forEach(function (val, key) {
        var opt = new Option(val.name, key);
        opt.addEventListener('click', function () {
            this.controls.output.innerText = val.phone;
        }.bind(this));
        this.controls.list.options[key] = opt;
    }, this);
};