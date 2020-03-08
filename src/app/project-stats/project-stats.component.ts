import { Component, OnInit } from '@angular/core';
import {CommitsService} from '../commits.service';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-project-stats',
  templateUrl: './project-stats.component.html',
  styleUrls: ['./project-stats.component.scss']
})
export class ProjectStatsComponent implements OnInit {
  public userList;
  public formDateFrom = new Date();
  public formDateTo = new Date();


  constructor(private commitsService: CommitsService, private route: ActivatedRoute) {}

  private formatDate(date: Date) {
    const dateFormatted = [
      '' + date.getFullYear(),
      '0' + (date.getMonth() + 1),
      '0' + date.getDate(),
      '0' + date.getHours(),
      '0' + date.getMinutes()
    ].map(component => component.length < 4 ? component.slice(-2) : component);

    return dateFormatted.slice(0, 3).join('-') + 'T' + dateFormatted.slice(3).join(':');
  }

  private getUserList() {
    const projectId = this.route.snapshot.paramMap.get('id');

    const paramsObject = {
      with_stats: '1',
      per_page: '100',
      since: this.formatDate(this.formDateFrom),
      until: this.formatDate(this.formDateTo),
    };

    const params = new HttpParams({fromObject: paramsObject});

    this.userList = this.commitsService.getCommits(projectId, params).
    pipe(
      map((commits: []) => {
        const users = [];
        commits.forEach((value: {author_name, author_email, stats: {additions, deletions, total}, title}) => {
          if (value.title.startsWith('Merge branch')) {
            return;
          }
          const objIndex = users.findIndex((obj => obj.mail === value.author_email));
          if (objIndex !== -1) {
            users[objIndex].stats.additions += value.stats.additions;
            users[objIndex].stats.deletions += value.stats.deletions;
            users[objIndex].stats.total += value.stats.total;
            users[objIndex].commitsCount += 1;


          } else {
            users.push({
              username: value.author_name,
              mail: value.author_email,
              stats: value.stats,
              commitsCount: 1
            });
          }
        });

        return users;
      })
    );
  }

  ngOnInit() {
    this.formDateFrom.setDate(this.formDateFrom.getDate() - (this.formDateFrom.getDay() + 6) % 7);
    this.formDateTo.setDate(this.formDateFrom.getDate() + 7);

    console.log(this.formatDate(this.formDateFrom));
    console.log(this.formDateTo);

    this.getUserList();
  }

}
