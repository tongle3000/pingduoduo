import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../domain';
import { environment } from 'src/environments/environment';
import Mock, { MockData } from 'src/app/shared/decorator/Mock';


@Injectable({
    providedIn: 'root'
})
export class MyService {
    constructor(private http: HttpClient) { }

    @Mock(MockData.profile)
    getProfile() {
        return this.http.get<Profile>(`${environment.baseUrl}/profile`);
    }

    saveProfile(profile: Profile) {
        const headers = { 'Content-Type': 'application/json' };
        return this.http.post<Profile>(`${environment.baseUrl}/profile`, profile, {
            headers
        });
    }
}
