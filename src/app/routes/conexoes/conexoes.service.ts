import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepoSearchList {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
  operation: string;
}

@Injectable()
export class ConexoesService {
  constructor(private http: HttpClient) {}

  getList(params = {}): Observable<RepoSearchList> {
    return this.http.get<RepoSearchList>('https://api.github.com/search/repositories', { params });
  }
}
