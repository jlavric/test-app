import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote-com',
    templateUrl: 'app/vote.template.html',
    styles: [
        `
            .vote-com {
                width: 20px;
                text-align: center;
                color: #999;
            }

            .vote-count {
                font-size: 1.2em;
            }

            .vote-button {
                cursor:pointer;
            }

            .highlighted {
                font-weight: bold;
                color: orange;
            }
        `
    ]
})
export class VoteComponent {
    @Input() votes = 0;
    @Input() myVote =0;
    @Output() vote = new EventEmitter();

    upVote(){
        if (this.myVote == 1) return;

        this.myVote++;

        this.vote.emit({myVote:this.myVote});
    }

    downVote(){
        if (this.myVote == -1) return;

        this.myVote--;

        this.vote.emit({myVote:this.myVote});
    }

}