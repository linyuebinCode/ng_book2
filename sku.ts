/**
 * Created by linyuebin on 2016/4/7.
 */
import {Component} from "angular2/core";
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
    selector:'app',
    directives:[FORM_DIRECTIVES],
    templateUrl:'sku.html'
})
export class DemoFormSku{
    onSubmit(form:any):void{
        console.log(`you submitted value`,form)
    }
}

