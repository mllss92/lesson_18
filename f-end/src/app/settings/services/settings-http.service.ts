import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { ChangedUserData } from './../../shared/interfaces/changed-user-data';
import { ProfileInfo } from './../../shared/interfaces/profile-info';
import { MakeHeadersService } from './../../shared/helpers/make-headers.service';

@Injectable()
export class SettingsHttpService {

  constructor(
    private http: HttpClient,
    private header: MakeHeadersService,
    private location: Location,
  ) { }

  getSettings(): Observable<ProfileInfo> {
    return this.http.get<ProfileInfo>('api/settings/get', this.header.makeHeader());
  }

  goBack(): void {
    this.location.back();
  }

  uploadPhoto(data: FormData): Observable<{ path: string }> {
    return this.http.post<{ path: string }>('api/settings/upload', data, this.header.makeHeader());
  }

  confirmPassword(password: string): Observable<boolean> {
    const value = { password };
    return this.http.post<boolean>('api/settings/confirm-password', value, this.header.makeHeader());
  }

  saveChanges(data: ChangedUserData): Observable<ProfileInfo> {
    return this.http.patch<ProfileInfo>('api/settings/save-changes', data, this.header.makeHeader());
  }
}
