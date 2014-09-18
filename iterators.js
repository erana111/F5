function iterator() {
    var items = [], index = -1;

    this.__init__ = function(args) {
        for (var i=0; i<args.length; i++) {
            if (typeof(args[i]) === "object") {
                var props = args[i];
                for (var p in props) {
                    if (props.hasOwnProperty(p)) {
                        items.push(props[p]);
                    }
                }
            } else {
                items = items.concat(args[i].split(''));
            }
        }
    }

    Array.prototype.hasNext = function() {
        return this.length > index + 1;
    }

    Array.prototype.next = function() {
        if (!this.hasNext()) return null;
        index++;
        return this[index];
    }

    this.__init__(arguments);
    return items;
};

function init() {
    var iter1 = iterator(["P", "A", "P", "A", " "]);
    var iter2 = iterator(["W", "A", "S", " "]);
    var iter3 = iterator(iter2, "A", " ", ["R", "O", "L", "L"]);
    var iter4 = iterator(iter3, ["I", "N", "G"]);
    var iter5 = iterator(iter1, iter4, " STONE");

    var output = "";
    while (iter5.hasNext()) {
        output += iter5.next();
    }
    //console.log(output);
    return output;
}
