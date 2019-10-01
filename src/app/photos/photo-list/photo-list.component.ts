import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title: string = 'Angula';
  photos: Photo[] = [];
  hasMore: boolean = false;
  currentPage: number = 1;
  userName: string = '';
  filter: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService) {
  }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.nomeUsuario;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }
  load() {
    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter='';
        this.photos = this.photos.concat(photos);
        if (!photos.length)
          this.hasMore = true;
      });
  }
}



