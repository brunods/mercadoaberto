module.exports = {
    "**/*.php": [
        "composer run-script format",
        "composer run-script analyse",
    ],
};
