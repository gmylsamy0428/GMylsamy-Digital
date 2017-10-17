import {Component} from '@angular/core';

@Component({
	selector: 'ganesh-app',
	template: `<div>
		<h1>{{pageTitle}}</h1>
		<gom-order></gom-order>
		
	</div>`
})

export class AppComponent{
	pageTitle:string="Home Page"
}
