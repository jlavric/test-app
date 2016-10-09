import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted{
            color: deeppink;
        }`
    ]
})
export class LikeComponent {
    @Input()
    count = 10;

    isClicked = false;

    @Output()
    change = new EventEmitter();

    onClick() {

        this.count += this.isClicked ? 1 : -1;    
        this.isClicked=!this.isClicked;
    }    

}