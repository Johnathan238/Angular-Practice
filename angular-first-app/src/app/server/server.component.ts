import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server', // ^ Use this components for other components in HTML
  templateUrl: './server.component.html', // ^ This will hold the temeplate, the HTML code for my component here
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
