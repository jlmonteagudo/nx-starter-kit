import { async, TestBed } from '@angular/core/testing';
import { FeatureBlogModule } from './feature-blog.module';

describe('FeatureBlogModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureBlogModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureBlogModule).toBeDefined();
  });
});
