import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  selectedFile: File | null = null;
  result = '';
  loading = false;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (!this.selectedFile) return;
    this.loading = true;

    // Mock result
    setTimeout(() => {
      this.result = Math.random() > 0.5 ? 'Fake Detected!' : 'Authentic!';
      this.loading = false;
    }, 2000);
  }
}
