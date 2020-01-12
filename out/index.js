"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GitHubServiceApi_1 = require("./GitHubServiceApi");
var svc = new GitHubServiceApi_1.GitHubServiceApi();
// let user=svc.getApiUser('thesaurabh1811',(user: User): any=>{
//     console.log(user);
// });
var repos = svc.getRepos('thesaurabh1811', function (repos) {
    console.log(repos);
});
