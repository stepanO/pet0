import {Injectable, SecurityContext} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";
import {Types} from "./types";
import {encode} from 'base-64';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private httpClient: HttpClient,
              private domSanitizer: DomSanitizer) {

  }

  generate(data: string, type: SecurityContext) {
    // return this.httpClient.post('/api/generate', data);
    return of(`:inJector:${type}:${encode(this.domSanitizer.sanitize(type, data))}`);
  }
}
