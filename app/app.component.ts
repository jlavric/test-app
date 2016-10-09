import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {SubscribeFormComponent} from './subscribe-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GitHubProfileComponent} from './github-profile.component';

@Component({
    selector: 'my-app',
    //template pišeš inline če je majhen in je tako componenta samozadostna, če je velik pa je to seveda slaba praksa in je bolje imeti ločen fajl
    //seveda pa to zahteva dodaten url request, seveda samo prvič, potem pa gre v cache
    template: `
     <github-profile></github-profile>   
     <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
     </div>
     <div class="panel panel-heading"><signup-form></signup-form></div>
     <div class="panel panel-heading"><subscribe-form></subscribe-form></div>
     <div class="bg-warning"><contact-form></contact-form></div>
     <div class="panel panel-default">
        <div class="panel-heading">
            <i class="glyphicon glyphicon-star"></i>
            <favorite [isFavorite]="post.isFavoriteP" (change)="onFavoriteChange($event)"></favorite>
            <like></like>
            <vote-com [votes]="post.voteCount" [myVote]="post.myVote" (vote)="onVote($event)"></vote-com>
         </div>   
         <div class="panel-body">
            <tweets></tweets>
         </div>   
     </div>
     <zippy title="Classical settings">
        Just some fun color and font settings
        </zippy>
     <zippy title="Advanced settings">
        Some really strange settings like number of spaces
        </zippy>   
     `,
    directives: [FavoriteComponent, LikeComponent, VoteComponent, TweetsComponent, ZippyComponent, ContactFormComponent,SubscribeFormComponent, SignUpFormComponent, GitHubProfileComponent],
    providers: [PostService,HTTP_PROVIDERS]
})

export class AppComponent implements OnInit { 
    post = {
        title: "Title",
        isFavoriteP: true,
        voteCount: 123,
        myVote: 1
    }

    onFavoriteChange($event){
        console.log($event);
    }

    onVote($event){
        console.log($event);
    }

    constructor(private _postService: PostService){
        //this._postService.createPost({userId:1, title:"a", body:"b"})
    }

    // after the constructor
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                console.log(posts[0].title);
            });
    }

    isLoading = true;

} 