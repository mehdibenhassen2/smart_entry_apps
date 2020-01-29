
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
  // encapsulation: ViewEncapsulation.None, // very very important 

})
export class HomeCarouselComponent implements OnInit {
    dataEvent: string;
    public currentImageId = 0; // init of first image id in the slide
    imagesLeft = [
        {
            id: 1,
            src: 'assets/left/left1.jpg',
            text: '\"We are designing for a global user base...we can get feedback not just from drivers we see in San Francisco but from all around the world.\"',
            author: 'SARAH ABRAHAMS',
            logo: 'assets/condoplex.jpg',
        },
        {
            id: 1,
            src: 'assets/left/left2.jpg',
            text: '\"We are designing for a global user base...we can get feedback not just from drivers we see in San Francisco but from all around the world.\"',
            author: 'SARAH ABRAHAMS',
            logo: 'assets/condoplex.jpg',
        },
        {
            id: 3,
            src: 'assets/left/left3.jpeg',
            text: '\"We are designing for a global user base...we can get feedback not just from drivers we see in San Francisco but from all around the world.\"',
            author: 'SARAH ABRAHAMS',
            logo: 'assets/condoplex.jpg',
        },
        {
            id: 4,
            src: 'assets/left/left4.jpg',
            text: '\"We are designing for a global user base...we can get feedback not just from drivers we see in San Francisco but from all around the world.\"',
            author: 'SARAH ABRAHAMS',
            logo: 'assets/condoplex.jpg',
        },
        {
            id: 5,
            src: 'assets/left/left5.jpg',
            text: '\"We are designing for a global user base...we can get feedback not just from drivers we see in San Francisco but from all around the world.\"',
            author: 'SARAH ABRAHAMS',
            logo: 'assets/condoplex.jpg',
        },
    ];
    constructor(ngbCarouselConfig: NgbCarouselConfig) {
        ngbCarouselConfig.interval = 5000;
        ngbCarouselConfig.wrap = true;
        ngbCarouselConfig.keyboard = false;
        ngbCarouselConfig.pauseOnHover = true;

    }

    ngOnInit() {
    }

}
