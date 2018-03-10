import { Component } from '@angular/core';

import { FileUploader } from 'ng2-file-upload'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 // public uploader:FileUploader = new FileUploader({url:'http://localhost:7531/api/Csv/LoadToSQL'});
}
