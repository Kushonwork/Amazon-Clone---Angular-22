import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { API } from '../api/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  private STORAGE_KEY = 'amazon-user';

  private currentUserSignal = signal<User | null>(
    this.loadUser()
  );

  currentUser = this.currentUserSignal.asReadonly();

  isLoggedIn = computed(() =>
    this.currentUser() !== null
  );

  register(user: User): Observable<User> {

    return this.http.post<User>(
      API.users,
      user
    );

  }

  login(email: string, password: string) {

    return this.http.get<User[]>(

      `${API.users}?email=${email}&password=${password}`

    );

  }

  checkEmail(email: string) {

  return this.http.get<User[]>(

    `${API.users}?email=${email}`

  );

}

  setUser(user: User) {

    this.currentUserSignal.set(user);

    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(user)
    );

  }

  logout() {

    this.currentUserSignal.set(null);

    localStorage.removeItem(
      this.STORAGE_KEY
    );

  }

  private loadUser(): User | null {

    const saved =
      localStorage.getItem(this.STORAGE_KEY);

    if (!saved) return null;

    return JSON.parse(saved);

  }

}