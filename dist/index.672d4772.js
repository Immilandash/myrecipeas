const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s}`));
        }, s * 1000);
    });
};
timeout(1);

//# sourceMappingURL=index.672d4772.js.map
