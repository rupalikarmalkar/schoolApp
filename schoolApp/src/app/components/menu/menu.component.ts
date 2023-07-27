import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
@Output() sideNavToggled = new EventEmitter<boolean>();
menuStatus:boolean=false;
  constructor(){}
  
  ngOnInit():void{
  }
    SideNavToggle(){
      this.menuStatus =!this.menuStatus;
      this.sideNavToggled.emit(this.menuStatus);
    }
  }

  

function SideNavToggle() {
  throw new Error('Function not implemented.');
}

