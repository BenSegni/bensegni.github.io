import { Component } from '@angular/core';
import { GlobalDataService } from '../../global/global-data.service';
import { blogData } from '../../global/data/blog-data';
import { TechnologyEnum } from '../../global/enum/technology.enum';
import { Blog } from '../interface/blog';
import { FilterConfig } from '../../global/shared-filter/interface/filter.config';
import { FadeInButton } from '../../global/utils/animations/fade.animation';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  animations: [FadeInButton()]
})
export class BlogComponent extends GlobalDataService {
  public filterConfig: FilterConfig<Blog> = {
    data: blogData,
    listLength: blogData.length,
    signalData: this.blog$,
    options: [
      TechnologyEnum.Angular,
      TechnologyEnum.HTML5,
      TechnologyEnum.SASS,
      TechnologyEnum.Typescript,
    ],
    resetValue: TechnologyEnum.HTML5,
  }
}
