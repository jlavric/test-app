import {Component} from 'angular2/core';
import {ControlGroup,Control,Validators,FormBuilder} from 'angular2/common';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
        // model driven forms
        /*form = new ControlGroup({
            username: new Control('',Validators.required),
            passport: new Control('',Validators.required)
        });*/

        form: ControlGroup;
        constructor(fb: FormBuilder){
            this.form = fb.group({
                username: ['',Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpace
                ]), UsernameValidators.shouldBeUnique],
                password: ['',Validators.required]
            });
        }

        signup(){
            console.log(this.form.value);
        }
}