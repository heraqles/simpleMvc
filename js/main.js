/**
 * Created by heraqles on 08.06.16.
 */

(function () {

    var model = new Model([
        {
            name: "John",
            phone: 784326192
        },
        {
            name: "Joe",
            phone: 123123123
        },
        {
            name: "Joanna",
            phone: 123123123
        }
    ]);
    var viewList =  new ViewList(model,'.container-list');
    var viewNewItem = new ViewNewItem('.container-list');
    var controller = new Controller(model, viewList, viewNewItem);
    viewList.renderList();
    window.Data = model.getData();
})();