function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function changeSvg() {
        20 == svgInt ? svgInt = 0 : svgInt++;
        var image = svgInt + ".svg";
        Ti.API.info("Image loaded :" + image);
        svg.setImage(image);
    }
    function openListView() {
        var listviewWindow = Alloy.createController("listView").getView();
        listviewWindow.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "red",
        id: "container",
        layout: "vertical"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "change Svg file",
        top: "10",
        width: "200",
        height: "50"
    });
    $.__views.container.add($.__views.button);
    changeSvg ? $.addListener($.__views.button, "click", changeSvg) : __defers["$.__views.button!click!changeSvg"] = true;
    $.__views.buttonListView = Ti.UI.createButton({
        id: "buttonListView",
        top: "50",
        width: "200",
        height: "50",
        title: "ListView test"
    });
    $.__views.container.add($.__views.buttonListView);
    openListView ? $.addListener($.__views.buttonListView, "click", openListView) : __defers["$.__views.buttonListView!click!openListView"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var svgView = require("com.geraudbourdin.svgview");
    var svg = svgView.createView({
        image: "0.svg",
        width: "350",
        height: "350",
        top: 0,
        left: 0,
        backgroundColor: "pink"
    });
    $.container.add(svg);
    var svgInt = 0;
    $.container.open();
    __defers["$.__views.button!click!changeSvg"] && $.addListener($.__views.button, "click", changeSvg);
    __defers["$.__views.buttonListView!click!openListView"] && $.addListener($.__views.buttonListView, "click", openListView);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;