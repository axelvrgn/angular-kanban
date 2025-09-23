import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SupabaseService } from '../services/supabase-service';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  email: string = '';
  password: string = '';
  error: string | null = null;
  loading: boolean = false;

  constructor(private supabaseService: SupabaseService) {}

  async login() {
    this.loading = true;
    this.error = '';
    try {
      const { data, error } = await this.supabaseService.signIn(this.email, this.password);
      if (error) {
        this.error = error.message;
      } else {
        // Connexion réussie, redirigez ou affichez un message
        console.log('Connexion réussie:', data);
      }
    } catch (err: any) {
      this.error = err.message;
    }
    this.loading = false;
  }
}
