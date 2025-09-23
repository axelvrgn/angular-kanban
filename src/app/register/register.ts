import { Component } from '@angular/core';
import { SupabaseService } from '../services/supabase-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string | null = null;
  success: string | null = null;
  loading: boolean = false;

  constructor(private supabaseService: SupabaseService) {}

  async register() {
    this.error = '';
    this.success = '';
    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
      return;
    }
    this.loading = true;
    try {
      const { data, error } = await this.supabaseService.signUp(this.email, this.password);
      if (error) {
        this.error = error.message;
      } else {
        this.success = 'Compte créé ! Vérifiez vos emails pour valider votre inscription.';
      }
    } catch (err: any) {
      this.error = err.message;
    }
    this.loading = false;
  }
}
