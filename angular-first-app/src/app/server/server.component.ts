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
  serverId = 1
  serverStatus: string = 'offline'
  serverCreated = false
  servers = ['Testserver', 'Testserver 2']

  constructor() {
   this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
