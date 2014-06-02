app.util = {

    _ranges: {},

    range: function(size) {

        if (!app.util._ranges.hasOwnProperty(size)) {
            app.util._ranges[size] = new Array(size);
            for(var i = 0; i < size; i++) {
                app.util._ranges[size][i] = i;
            }
        }

        return app.util._ranges[size];

    },


    hex: function(value, width) {
        value = value.toString(16).toUpperCase();
        width = width || 4;
        return new Array(width - value.length + 1).join('0') + value;
    },

    raw: function(value) {
        if (value === 0) {
            return '.';

        } else {
            return String.fromCharCode(value);
        }
    }

};

