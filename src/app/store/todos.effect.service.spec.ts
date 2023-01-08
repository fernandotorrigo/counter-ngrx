import { TestBed } from '@angular/core/testing';

import { TodosEffectService } from './todos.effect.service';

describe('TodosEffectService', () => {
  let service: TodosEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
