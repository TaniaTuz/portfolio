import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;


@Component({
    selector: 'app-portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {
    public isModalOpen: any;
    public projects: any;
    public clients: any;

    constructor() {
        this.isModalOpen = null;
        this.projects = [
            {
                title: 'Web Design',
                category: 'Youtube',
                image: 'assets/images/computer.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a est porttitor pulvinar. Praesent convallis mi ipsum, nec ornare sem mattis ac. Praesent eget risus ut ligula ornare suscipit vel quis neque. Quisque at dictum nibh, nec ullamcorper orci.'
            },
            {
                title: 'UI/UX Design',
                category: 'Youtube',
                image: 'assets/images/notebook.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a est porttitor pulvinar. Praesent convallis mi ipsum, nec ornare sem mattis ac. Praesent eget risus ut ligula ornare suscipit vel quis neque. Quisque at dictum nibh, nec ullamcorper orci.'
            },
            {
                title: 'Branding & Design',
                category: 'Youtube',
                image: 'assets/images/design.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a est porttitor pulvinar. Praesent convallis mi ipsum, nec ornare sem mattis ac. Praesent eget risus ut ligula ornare suscipit vel quis neque. Quisque at dictum nibh, nec ullamcorper orci.'
            },
            {
                title: 'Web Development',
                category: 'Youtube',
                image: 'assets/images/virtual.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a est porttitor pulvinar. Praesent convallis mi ipsum, nec ornare sem mattis ac. Praesent eget risus ut ligula ornare suscipit vel quis neque. Quisque at dictum nibh, nec ullamcorper orci.'
            },
            {
                title: 'Content Writing',
                category: 'Youtube',
                image: 'assets/images/time.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a est porttitor pulvinar. Praesent convallis mi ipsum, nec ornare sem mattis ac. Praesent eget risus ut ligula ornare suscipit vel quis neque. Quisque at dictum nibh, nec ullamcorper orci.'
            },
            {
                title: 'Interface Design',
                category: 'Youtube',
                image: 'assets/images/images.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt a est porttitor pulvinar. Praesent convallis mi ipsum, nec ornare sem mattis ac. Praesent eget risus ut ligula ornare suscipit vel quis neque. Quisque at dictum nibh, nec ullamcorper orci.'
            }
        ];
        this.clients = [
            {
                name: 'Aria Collins',
                job: 'Marketing Manager',
                image: 'assets/images/client_1.jpg',
                description: 'Hi, I am Aria Collins and blah blah blah....'
            },
            {
                name: 'Cillian Metcalfe',
                job: 'Graphic Designer',
                image: 'assets/images/client_2.jpg',
                description: 'Hi, I am Cillian Metcalfe and blah blah blah....'
            }
        ];
    }

    openModal(index: number) {
        this.isModalOpen = index;
    }

    closeModal() {
        this.isModalOpen = null;
    }

    // SWIPER
    ngAfterViewInit(): void {
        new Swiper('.client-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
}
