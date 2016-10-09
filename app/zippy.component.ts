import {Component,Input} from 'angular2/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy">
            <div class="zippy-title" (click)="toggle()">
             {{title}}
             <i class="pull-right glyphicon"
                [ngClass]="
                    {
                        'glyphicon-chevron-down' : !isExpanded,
                        'glyphicon-chevron-up' : isExpanded
                    }
                "
             >
             </i>
            </div>
            <div *ngIf="isExpanded" class="zippy-content">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [
        `
            .zippy {
                border: 1px solid #ccc;
                border-radius: 2px;
            }
            .zippy .zippy-title {
                padding: 20px;
                font-weight: bold;
            }
            .zippy .zippy-content {
                padding: 20px;
            }
        `
    ]
})
export class ZippyComponent {
    @Input() title: string;

    isExpanded = false;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}