import { Component, OnInit } from '@angular/core';
//import { Swiper, SwiperSlide } from 'swiper/swiper-angular';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  modules: any[] = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom];

  constructor() { }

  ngOnInit(): void { }
}