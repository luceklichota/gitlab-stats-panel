import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private http: HttpClient) {
  }

  public getCommits(projectId, params) {
    return this.http.get(`https://gitlab.britenet.com.pl/api/v4/projects/${projectId}/repository/commits`, {params});
  }

  public getProjects() {
    const paramsObject = {
        visibility: 'private',
        per_page: '100'
      };

    const params = new HttpParams({fromObject: paramsObject});

    console.log(params.toString());

    return this.http.get(`https://gitlab.britenet.com.pl/api/v4/projects/`, {params});
  }
}
