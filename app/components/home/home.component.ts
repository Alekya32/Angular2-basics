import {Component} from '@angular/core'

@Component({
	moduleId:module.id,//while we call html page externally in include this 
	selector:'my-home',
	templateUrl:'./home.component.html'
})
export class HomeComponent{
	private message:string;

	constructor(){
		this.message="i am constructor"
	}
}