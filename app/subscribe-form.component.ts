import {Component} from 'angular2/core';

@Component({
    selector: 'subscribe-form',
    templateUrl: 'app/subscribe-form.component.html'
})
export class SubscribeFormComponent{
    onSubscribe(form){
        console.log(form);
    }

    frequencies = [
        
        {id:1, label: 'Daily'},
        {id:2, label: 'Weekly'},
        {id:3, label: 'Monthly'},
        {id:4, label: 'Never'},
        {id:5, label: 'Aggressive'}

    ]
}