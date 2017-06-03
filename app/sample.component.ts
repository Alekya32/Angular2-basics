import {Component} from '@angular/core'

@Component({
	moduleId:module.id,
	selector:"sample",
	templateUrl:"sample.component.html"
})
export class SampleComponent{
	//declaration
	private name:string;
	private imageUrl:string;
	private myName:string;
	private showHeader:boolean;
	private items:string[];
	private price:number
	//initialization
	constructor(){
		this.name="Alekya";
		this.imageUrl="http://lorempixel.com/400/200";
		this.myName="";
		this.showHeader=true;
		this.items=["TV","AC","Fridge","vaccum cleaner"]
		this.price=1500;
	}

	runMe(){
		console.log("Please click this button")
	}
	send(eventAny :any){
		console.log(eventAny.target.value)
	}
	send1(event:any){
		console.log(event.target.value)
	}
}