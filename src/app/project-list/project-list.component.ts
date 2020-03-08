import { Component, OnInit } from '@angular/core';
import {CommitsService} from '../commits.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  public projectList;

  constructor(private commitsService: CommitsService) { }

  ngOnInit() {
    this.projectList = this.commitsService.getProjects();
  }

}
