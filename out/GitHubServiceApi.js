"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var user_1 = require("./user");
var repos_1 = require("./repos");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    'json': true
};
var GitHubServiceApi = /** @class */ (function () {
    function GitHubServiceApi() {
    }
    GitHubServiceApi.prototype.getApiUser = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            var users = new user_1.User(body);
            cb(users);
        });
    };
    GitHubServiceApi.prototype.getRepos = function (userName, cb) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            var reposArray = body;
            cb(reposArray.map(function (repo) { return new repos_1.Repos(repo); }));
            //console.log(body);
        });
    };
    return GitHubServiceApi;
}());
exports.GitHubServiceApi = GitHubServiceApi;
