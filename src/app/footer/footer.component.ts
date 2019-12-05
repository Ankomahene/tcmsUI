import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer = 'Copyright @ 2019 | turntabl client management system';

  constructor() { }

  ngOnInit() {
  }

}
