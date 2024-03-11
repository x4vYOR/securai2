import { AfterViewInit, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Dropdown } from 'flowbite';
import type { DropdownOptions, DropdownInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements AfterViewInit {

  
  @ContentChild('headerTemplate') headerTemplate!: TemplateRef<any>;
  @ContentChild('buttonTemplate') buttonTemplate!: TemplateRef<any>;
  @ContentChild('menuTemplate') menuTemplate!: TemplateRef<any>;
  
  @Input() menuId:string = "dropdown-menu"
  @Input() buttonId:string = "dropdown-button"

  targetEl!: HTMLElement;
  triggerEl!: HTMLElement;
  dropdown!: DropdownInterface;

  options: DropdownOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onHide: () => {
        console.log('dropdown has been hidden');
    },
    onShow: () => {
        console.log('dropdown has been shown');
    },
    onToggle: () => {
        console.log('dropdown has been toggled');
    },
  };

  ngAfterViewInit(): void {
    this.targetEl = document.getElementById(this.menuId)!;
    this.triggerEl = document.getElementById(this.buttonId)!;

    const instanceOptions: InstanceOptions = {
      id: this.menuId,
      override: true
    };
  
    this.dropdown = new Dropdown(
      this.targetEl,
      this.triggerEl,
      this.options,
      instanceOptions
  );
  
  }
  

  
toggleDropdown(){
  console.log("toggleDropdown was clicked!");
  
  this.dropdown.show();
}

}
