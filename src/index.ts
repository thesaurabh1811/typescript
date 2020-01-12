import { GitHubServiceApi } from "./GitHubServiceApi";
import { User } from "./user";
import { Repos } from "./repos";

let svc = new GitHubServiceApi();

// let user=svc.getApiUser('thesaurabh1811',(user: User): any=>{
//     console.log(user);
// });


let repos=svc.getRepos('thesaurabh1811',(repos: Repos[])=>{
    console.log(repos);
});
