import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = ['../assets/images/bt1.png', '../assets/images/bt2.png', '../assets/images/bt3.png'];
  
  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage = '';

  constructor(config: NgbCarouselConfig, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.contactForm = this.formBuilder.group({
      name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      phone:[null, Validators.required],
      message:[null, Validators.required],
    })

  }

  onSubmit(value:any){
    console.log(value);

    this.isSubmit = true;
    this.submitMessage = 'message envoyé avec succès';
    setTimeout(() => {
      this.isSubmit = false;
    }, 8000);
    
  }

}
