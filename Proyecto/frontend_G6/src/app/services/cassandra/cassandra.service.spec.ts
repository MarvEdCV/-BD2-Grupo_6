import { TestBed } from '@angular/core/testing';

import { CassandraService } from './cassandra.service';

describe('CassandraService', () => {
  let service: CassandraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CassandraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
