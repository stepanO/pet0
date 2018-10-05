import {Component, OnInit, SecurityContext} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {GeneratorService} from "../services/generator.service";
import {Types} from "../services/types";
import {decode} from "base-64";

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  generatorForm = new FormGroup({
    text: new FormControl('hello')
  });
  codes: String[] = [];
  decoded:string;
  constructor(private generatorService: GeneratorService) { }

  ngOnInit() {
  }

  onGenerate() {
    this.generatorService.generate(this.generatorForm.value.text, SecurityContext.NONE)
      .subscribe((code) => this.codes.push(code));
  }

  decode(str) {
    console.log(decode(str.replace(/:inJector:.:/, '')))
  }
}
