import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  
  @Input() title = '';

  @Input() description = '';
  // tslint:disable-next-line: max-line-length
  @Input() url = '';


  constructor() { }

  ngOnInit() {
  }

}
