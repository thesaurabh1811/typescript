import { Repos }  from "./repos";


export class User{
    login: string | undefined;
    fullname:string | undefined;
    repoCount: number | undefined;
    followerCount:number | undefined;
    repos?: Repos[] | undefined;

    constructor(userResponse:any){
        this.login = userResponse.login;
        this.fullname = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.login = userResponselogin;

    }
}