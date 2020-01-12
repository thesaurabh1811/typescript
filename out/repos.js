"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repos = /** @class */ (function () {
    function Repos(repos) {
        this.name = repos.name;
        this.description = repos.description;
        this.url = repos.html_url;
        this.size = repos.size;
        this.forkCount = repos.forks;
    }
    return Repos;
}());
exports.Repos = Repos;
