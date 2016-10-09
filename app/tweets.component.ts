import {Component} from 'angular2/core';
import {TweetsService} from './tweets.service';

@Component({
    selector: 'tweets',
    templateUrl: 'app/tweets.template.html',
    styles: [],
    providers: [TweetsService]
})
export class TweetsComponent {
    tweets;

    constructor (tweetsService: TweetsService){
        this.tweets=tweetsService.getTweets(); 
    }

}