import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  constructor(private issueService: IssuesService) {}

  issues: Issue[] = [];

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }
  ngOnInit(): void {
    this.getIssues();
  }
}
