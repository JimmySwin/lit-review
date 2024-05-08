define(['jquery'], function($) {
    return {
        loadData: function(callback) {
            $.getJSON('../../data/data.json', function(data) {
                console.log("Data loaded successfully:", data);
                if (callback) callback(data);
            }).fail(function(jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.error("Request Failed: " + err);
            });            
        }
    };
});
