import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {
    public myEmail: string;
    public form: FormGroup | any;
    public successMessage: string | null = null;
    public errorMessage: string | null = null;

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService
    ) {
        this.myEmail = 'taniamtztuz@gmail.com';
    }

    ngOnInit() {
        this.form = this.fb.group({
            name: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            subject: [null, [Validators.required]],
            message: [null, Validators.required]
        });
    }

    submit() {
        this.successMessage = null;
        this.errorMessage = null;

        if (this.form.valid) {
            const formData = this.form.value;
            this.contactService.sendMessage(formData)
                .then(() => {
                    this.successMessage = 'Mensaje enviado exitosamente';
                    setTimeout(() => {
                        this.successMessage = null;
                    }, 5000);
                    this.form.reset();
                })
                .catch((error) => {
                    this.errorMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
                    setTimeout(() => {
                        this.errorMessage = null;
                    }, 5000);
                });
        } else {
            this.errorMessage = 'Por favor, completa todos los campos correctamente.';
            setTimeout(() => {
                this.errorMessage = null;
            }, 5000);
        }
    }
}
