import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss'],
})
export class PollCreateComponent implements OnInit {
  pollForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group({
      question: this.fb.control('', [Validators.required]),
      image: this.fb.control(''),
      opt1: this.fb.control(''),
      opt2: this.fb.control(''),
      opt3: this.fb.control('')
    })
  }

  submitForm() {
    console.log(this.pollForm.value);
  }
  ngOnInit(): void {}
}
