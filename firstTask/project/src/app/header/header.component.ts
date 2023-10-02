import { Component, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {tuiAvatarOptionsProvider} from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  providers: [
    tuiAvatarOptionsProvider({
        size: 'l',
        autoColor: true,
        rounded: true,
    }),
],
})


export class HeaderComponent {
  testForm = new FormGroup({
    testValue1: new FormControl(true),
    testValue2: new FormControl(false),
    testValue3: new FormControl(true),
    testValue4: new FormControl(false),
    testValue5: new FormControl(true),
    testValue6: new FormControl(false),
    testValue7: new FormControl(true),
    testValue8: new FormControl(false),
})
}
