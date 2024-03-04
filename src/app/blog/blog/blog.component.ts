import { Component } from '@angular/core';
import { GlobalDataService } from 'src/app/global/global-data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent extends GlobalDataService {}
