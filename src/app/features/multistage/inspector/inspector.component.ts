import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-resolution-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent implements OnInit {

    constructor(public flower: FlowerService, public animal: AnimalService) { }

  ngOnInit(): void {
  }

}
