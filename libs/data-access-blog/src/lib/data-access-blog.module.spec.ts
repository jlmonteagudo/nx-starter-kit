import { async, TestBed } from '@angular/core/testing';
import { DataAccessBlogModule } from './data-access-blog.module';

describe('DataAccessBlogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataAccessBlogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataAccessBlogModule).toBeDefined();
  });
});
