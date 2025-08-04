import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePreviewPipe } from './file-preview.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FilePreviewPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  file: File | null = null;
  fileType: 'image'|'video'|null = null;
  loading = false;
  result: string | null = null;

  get isVideo(): boolean {
    return !!this.file && this.fileType === 'video';
  }
  get isImage(): boolean {
    return !!this.file && this.fileType === 'image';
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.setFile(input.files[0]);
    }
  }
  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer && event.dataTransfer.files[0]) {
      this.setFile(event.dataTransfer.files[0]);
    }
  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  setFile(file: File) {
    const type = file.type.startsWith('video/') ? 'video' :
                 file.type.startsWith('image/') ? 'image' : null;
    if (!type) {
      this.result = 'Unsupported file type. Please upload an image or video.';
      this.file = null;
      this.fileType = null;
      return;
    }
    this.file = file;
    this.fileType = type;
    this.result = null;
  }

  removeFile() {
    this.file = null;
    this.fileType = null;
    this.result = null;
  }

  onSubmit() {
    if (!this.file) return;
    this.loading = true;
    this.result = null;
    // Placeholder for model call (simulate delay)
    setTimeout(() => {
      this.loading = false;
      this.result = "File uploaded! Ready for deepfake analysis.";
      // Replace above string with a proper API call/result in future
    }, 1100);
  }
}
