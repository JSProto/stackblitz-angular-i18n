import { Component, ViewEncapsulation } from '@angular/core'
import { DecimalPipe, DatePipe } from '@angular/common'

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [DecimalPipe, DatePipe]
})
export class WelcomeComponent {
  title = $localize`Hello, World!`
  name = 'John'
  count = 5
  gender = 'male'
  amount = 7.5
  currentDate = Date.now()
}
