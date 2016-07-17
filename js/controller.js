/**
 * Created by heraqles on 08.06.16.
 */

function Controller(model, viewList, viewNewItem) {

    viewList.newItem = function () {
        viewNewItem.show();
    };

    viewNewItem.addItem = function (results) {
        model.addItem(results);
    };

    viewList.removeItem = function (selectIndex) {
        model.removeItem(selectIndex);
    };

}