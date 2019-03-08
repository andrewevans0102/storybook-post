import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chessie',
  templateUrl: './chessie.component.html',
  styleUrls: ['./chessie.component.css']
})
export class ChessieComponent implements OnInit {

  @Input()
  sound: String;

  constructor() { }

  ngOnInit() {
  }

}
