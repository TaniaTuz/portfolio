import { Component } from '@angular/core';

@Component({
    selector: 'app-services',
    templateUrl: 'services.component.html',
    styleUrls: ['services.component.scss']
})
export class ServicesComponent {
    public isModalOpen: any;
    public services: any;
    constructor() {
        this.isModalOpen = null;
        this.services = [
            {
                title: 'UI/UX Consultancy',
                subtitle: 'What is UX Consulting?',
                description: 'UX consulting helps companies improve their products overall usability and optimize expenses by implementing the right UX processes, methods, and tools.',
                items: [
                    'Establish the right UX processes',
                    'Create exceptional user experience',
                    'Discover new business opportunities',
                    'Save resources'
                ],
                icon: 'fa-pen-ruler'
            },
            {
                title: 'Branding & Design',
                subtitle: 'What is Branding & Design?',
                description: 'Brand Design can be defined as one of the crucial marketing practices of creating the name, logo, design and the symbolic elements related to the brand...',
                items: [
                    'Logo Design',
                    'Banner Design',
                    'Visual Identity Packages',
                    'Business Card & Business Systems'
                ],
                icon: 'fa-photo-film'
            },
            {
                title: 'Web Development',
                subtitle: 'What is Web Development?',
                description: 'Web development services are used to design, build, support and evolve all types of web-based software',
                items: [
                    'Web application development',
                    'Testing',
                    'Maintenance'
                ],
                icon: 'fa-file-code'
            },
            {
                title: 'Content Writing',
                subtitle: 'What is Content Writing?',
                description: 'Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes',
                items: [
                    'Web content writing',
                    'Blog writing for websites',
                    'Social media content'
                ],
                icon: 'fa-align-left'
            }
        ];
    }

    openModal(index: number) {
        this.isModalOpen = index;
    }

    closeModal() {
        this.isModalOpen = null;
    }
}
