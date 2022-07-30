import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server', // ^ Use this components for other components in HTML
  templateUrl: './server.component.html', // ^ This will hold the temeplate, the HTML code for my component here
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = "No server was created!"
  serverName = ''
  serverId = 10
  serverStatus = 'offline '
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }
}
