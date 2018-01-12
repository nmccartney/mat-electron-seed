import { NgxElectronService } from './../../../ngx-electron/ngx-electron.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'seed-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent {

    constructor(
        private electron: NgxElectronService,
        private router: Router) {

    }

    welcome(): void {
        this.electron.send('ping');
        this.electron.listener$.subscribe(message => {
            if (message === 'pong') {
                this.electron.shell.beep();
                this.router.navigate(['/getting-started']);
            }
        });
    }

}
