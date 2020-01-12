import * as request from 'request';
import { User }  from './user';
import { Repos } from './repos';

const OPTIONS: any={
    headers:{
        'User-Agent': 'request'
    },
    'json': true 

}


export class GitHubServiceApi{


    getApiUser(userName:string,cb:(user:User)=>any){
        request.get('https://api.github.com/users/'+userName,OPTIONS,(error:any,response: any,body:any)=>{
            let users= new User(body);
            cb(users);
        });

    }



    getRepos(userName: string,cb:(repos:Repos[])=>any){
        request.get('https://api.github.com/users/'+userName+'/repos',OPTIONS,(error:any,response: any,body:any)=>{
        let reposArray= body;
        cb( reposArray.map(
            (repo:any)=>new Repos(repo)
        ));    
        //console.log(body);
        });
    }

}