import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<label>Введіть рядок:</label>
                 <input [(ngModel)]="str" placeholder="">
                 <h1>♡ {{reverse}} ♡</h1>`
})
export class AppComponent { 
    str: string = ""
    get reverse(): string {
        return this.str.split("").reverse().join("")
    }
}