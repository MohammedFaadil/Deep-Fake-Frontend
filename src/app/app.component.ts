import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Deepfake Detector';
  logoExists = true;
  fileUploaded = false;

  uploadFile() {
    // Simulate file upload
    this.fileUploaded = true;
  }
}
