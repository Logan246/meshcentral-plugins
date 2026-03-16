var self = this;
exports.wininfo = function (parent) {
    var obj = {};
    obj.parent = parent;
    obj.name = 'Win-Info';
    obj.shortName = 'win-info';
    obj.description = 'Windows and Office Information';
    obj.version = '1.0.0';
    obj.author = 'Ylianst';

    obj.onDeviceRefresh = function (family, type, nodeid, tag, obj) {
        if (family == 2 && type == 1) { // Windows
            return { "Win-Info": { name: "Win-Info", caption: "Windows Info" } };
        }
        return null;
    };

    return obj;
};
