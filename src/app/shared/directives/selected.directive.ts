import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected: boolean = false;
  @HostBinding('style.backgroundColor') private backgroundColor: string =
    'white';
  @HostBinding('style.fontWeight') private fontWeight: string = 'normal';
  @HostBinding('style.color') private color: string = 'black';

  ngOnChanges(): void {
    if (this.appSelected) {
      this.backgroundColor = 'var(--primary)';
      this.fontWeight = 'bold';
      this.color = 'white';
    } else {
      this.backgroundColor = 'white';
      this.fontWeight = 'normal';
      this.color = 'var(--text-regular)';
    }
  }

  constructor() {}
}
