import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.scss']
})
export class MaxComponent implements OnInit {
  divDisplay:number=0
  url: any;
	msg = "";
  name: string = 'Mark Zulburaay'
  email:string = 'stylemariostyke43@gmail.com'
  facebook:string = 'https://www.facebook.com'
  twitter:string = 'https://www.twitter.com'
  instragram:string ='https://www.instragram.com'
  linkedIn:string = 'https://www.linkedIn.com'
  constructor(private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  editData() {
    this.divDisplay = 1

  }
  selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}
  saveData() {
    this.toaster.success('Data Updated Successfully');
    this.divDisplay = 0
  }
}
