import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @ContentChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ContentChild('buttonTemplate') buttonTemplate!: TemplateRef<any>;
  @ContentChild('menuTemplate') menuTemplate!: TemplateRef<any>;
  @Input() menuId:string = "dropdown-menu"
  @Input() buttonId:string = "dropdown-button"
  
}
