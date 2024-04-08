import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-gallery-app',
  standalone: true,
  imports: [],
  templateUrl: './gallery-app.component.html',
  styleUrl: './gallery-app.component.css',
})
export class GalleryAppComponent {
  images: string[] = [
    'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    'https://img.freepik.com/premium-photo/painting-mountain-lake-with-mountain-background_327072-11613.jpg',
    'https://img.freepik.com/premium-photo/painting-mountain-lake-with-river-mountains-background_421632-24167.jpg',
    'https://img.freepik.com/premium-photo/watercolor-mountain-landscape-with-lake-forest-digital-art-painting_743855-31092.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1707782400&semt=ais',
    'https://img.freepik.com/premium-photo/fairy-tale-multicolored-landscape-painting_258642-7790.jpg',
  ];
  imgUrl: string = this.images[0];
  intervalId: number = 0;
  nextBtn() {
    if (this.images.indexOf(this.imgUrl) < this.images.length - 1) {
      this.imgUrl = this.images[this.images.indexOf(this.imgUrl) + 1];
    } else {
      this.imgUrl = this.images[0];
    }
  }
  prevBtn() {
    if (this.images.indexOf(this.imgUrl) > 0) {
      this.imgUrl = this.images[this.images.indexOf(this.imgUrl) - 1];
    } else {
      this.imgUrl = this.images[this.images.length - 1];
    }
  }
  slideBtn() {
    this.intervalId = setInterval(() => {
      this.nextBtn();
    }, 500);
  }
  stopBtn() {
    clearInterval(this.intervalId);
  }
}
