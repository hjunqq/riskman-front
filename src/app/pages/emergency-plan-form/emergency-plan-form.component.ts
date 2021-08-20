import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-emergency-plan-form',
  templateUrl: './emergency-plan-form.component.html',
  styleUrls: ['./emergency-plan-form.component.scss']
})
export class EmergencyPlanFormComponent implements OnInit {
  // @ts-ignore
  @ViewChild('form') form: NgForm;


  isDropZoneActive = false;
  imageSource = "";
  textVisible = true;
  progressVisible = false;
  progressValue = 0;
  customUploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);
    let data:any = await this.http.post("http://localhost:4200/api/files/upload", formData).toPromise();
    this.filename = data["message"];
    console.log(data);
  };
  filename: any;


  constructor(private http: HttpClient) {
    this.onUploaded = this.onUploaded.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onUploadStarted = this.onUploadStarted.bind(this);
  }

  onUploaded(e:any) {
    const file = e.file;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.isDropZoneActive = false;
      this.imageSource = fileReader.result as string;
    }
    fileReader.readAsDataURL(file);
    this.textVisible = false;
    this.progressVisible = false;
    this.progressValue = 0;
  }

  onProgress(e:any) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }

  onUploadStarted() {
    this.imageSource = "";
    this.progressVisible = true;
  }
  ngOnInit() {
  }
}
