import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
    public isNavigationActive: any;
    constructor() {
        this.isNavigationActive = false;
    }

    toggleNavigation() {
        this.isNavigationActive = !this.isNavigationActive;
        const menuBtn = document.querySelector('.nav-menu-btn')!;

        menuBtn.classList.add('btn-click-effect');

        setTimeout(() => {
            menuBtn.classList.remove('btn-click-effect');
        }, 200);
    }



    closeNavigation() {
        this.isNavigationActive = false;
        const closeBtn = document.querySelector('.nav-close-btn')!;

        closeBtn.classList.add('btn-click-effect');

        setTimeout(() => {
            closeBtn.classList.remove('btn-click-effect');
        }, 300);
    }
}
