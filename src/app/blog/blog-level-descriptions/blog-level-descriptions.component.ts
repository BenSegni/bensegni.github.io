import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDescription } from '../interface/blog.description';
import { blogDescriptionData } from '../../global/data/blog-description-data';

@Component({
  selector: 'app-blog-level-descriptions',
  templateUrl: './blog-level-descriptions.component.html',
  styleUrls: ['./blog-level-descriptions.component.scss']
})
export class BlogLevelDescriptionsComponent implements OnInit, AfterViewChecked {
  private tag: string | null = '';
  public blogIcon = '../../../assets/img/blog_icon.svg';
  public blogDescriptionData: BlogDescription[] = blogDescriptionData
  constructor(private _route: ActivatedRoute) { }

  public ngOnInit(): void {
    this._route.fragment.subscribe((fragment) => this.tag = fragment);
  }

  public ngAfterViewChecked(): void {
    const options: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'start'
    }

    try {
      document.querySelector(`#${this.tag}`)?.scrollIntoView(
        options
      );
    } catch (error) {
      console.log(error);
    }
  }
}
