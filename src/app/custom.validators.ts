import { FormControl } from '@angular/forms';


export class CustomValidators{

    static email(fc: FormControl){
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(pattern.test(fc.value)) {
            return null;
        }
        else {
            return {
                emailError: true
            }
        }

    }
}