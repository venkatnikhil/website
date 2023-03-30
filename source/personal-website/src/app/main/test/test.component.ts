import { Component, OnInit } from '@angular/core';
import test from './../../../assets/test.json';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor() {}

  fileContent: any = test;
  fileContentString: string = JSON.stringify(test);

  ngOnInit(): void {
    console.log(test);
  }

  writeToFile() {
    test['new'] = 'Updated';
    this.fileContent = test;
    this.fileContentString = JSON.stringify(test);
  }
}
