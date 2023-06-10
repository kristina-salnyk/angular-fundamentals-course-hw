import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() className = 'button--primary';
  @Input() type = 'button';
  @Input() icon = '';
  @Input() text = '';

  onClick(){
    console.log('click')
  }
}
