import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { MaterialModule } from '../../app.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        SkillsComponent,
        ServicesComponent,
        PortfolioComponent,
        ContactComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        SkillsComponent,
        ServicesComponent,
        PortfolioComponent,
        ContactComponent
    ]
})
export class MainModule { }
