import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewContainerRef,
  inject,
} from '@angular/core'
import { WelcomeComponent } from './welcome/welcome.component'

@Component({
  standalone: true,
  selector: 'dynamic',
  template: `<span>This is a content of a dynamic component.</span>`,
})
class DynamicComponent {
  vcr = inject(ViewContainerRef)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [WelcomeComponent],
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  private vcr = inject(ViewContainerRef)

  public minutes = 0
  public gender = 'female'
  public fly = true
  public logo = 'https://angular.io/assets/images/logos/angular/angular.png'

  ngDoCheck(): void {
    console.log('Method not implemented.')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Method not implemented.')
  }

  ngOnInit(): void {
    console.log('Method not implemented.')
  }

  ngAfterViewInit() {
    const compRef = this.vcr.createComponent(DynamicComponent)
    compRef.changeDetectorRef.detectChanges()
  }

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i))
  }

  male() {
    this.gender = 'male'
  }

  female() {
    this.gender = 'female'
  }

  other() {
    this.gender = 'other'
  }
}
