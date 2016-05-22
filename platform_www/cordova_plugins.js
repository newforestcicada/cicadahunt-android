cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-cicada-detector-plugin/www/cicada-detector-plugin.js",
        "id": "cordova-cicada-detector-plugin.CicadaDetector",
        "clobbers": [
            "CicadaDetector"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-cicada-detector-plugin": "0.2.3",
    "cordova-plugin-whitelist": "1.2.2"
};
// BOTTOM OF METADATA
});