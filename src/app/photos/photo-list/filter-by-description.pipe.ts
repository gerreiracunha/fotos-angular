import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterbyDescription' })
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionsQuery: string) {
        descriptionsQuery = descriptionsQuery.trim().toLowerCase();
        if (descriptionsQuery) {
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(descriptionsQuery));
        } else {
            return photos;
        }
    }
};