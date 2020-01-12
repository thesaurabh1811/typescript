export class Repos{
name:string | undefined;
description:string | undefined;
url:string | undefined;
size:number | undefined;
forkCount: number | undefined;
constructor(repos: any){
    this.name=repos.name;
    this.description=repos.description;
    this.url=repos.html_url;
    this.size=repos.size;
    this.forkCount=repos.forks;
}
}