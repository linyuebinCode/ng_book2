/**
 * Created by linyuebin on 2016/4/7.
 */

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: 'app',
    templateUrl: 'app.html'
})

class App1{
    name:string;

    constructor(){
     this.name="Jack";
    }

}



bootstrap(App1);


