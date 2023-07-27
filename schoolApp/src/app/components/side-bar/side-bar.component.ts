import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() sideNavStatus:boolean=false;
// list =[
//   {
//     number:'1',
//     name:'dashBoard',
//     icon:'fa-solid fa-bars',
//   },
//   {
//     number:'2',
//     name:'home',
//     icon:'fa-solid fa-house',
//   }, {
//     number:'3',
//     name:'registration',
//     icon:'fa-solid fa-address-card',
//   }, {
//     number:'4',
//     name:'organization',
//     icon:'fa fa-house',
//   }, {
//     number:'5',
//     name:'branch',
//     icon:'fa-solid fa-code-branch',
//   }, {
//     number:'6',
//     name:'user',
//     icon:'fa-solid fa-users',
//   },
// ];

constructor(){}
}
