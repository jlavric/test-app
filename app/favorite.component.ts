import {Component, Input, EventEmitter, Output} from 'angular2/core';


@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html',
    styles: [`
        .glyphicon-star {
            color:orange;
        }
    `]
})

export class FavoriteComponent {
    @Input()
     isFavorite = false;

    //event za Component output property
    @Output()
     change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite});
    }
}