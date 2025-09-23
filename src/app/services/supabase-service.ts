import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://ienvrlpcmqdkltvjmode.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbnZybHBjbXFka2x0dmptb2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MTk5MjksImV4cCI6MjA3NDE5NTkyOX0.ZhxuEAUOc-RdQ92KB3bDjuhVP-WECku007NAwBRsgy8'
    );
  }

  // Méthodes d'authentification
  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({ email, password });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  // Obtenir l'utilisateur actuel
  getCurrentUser() {
    return this.supabase.auth.getUser();
  }

  // Écouter les changements d'état d'authentification
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  // Exposer le client Supabase pour d'autres opérations
  get client() {
    return this.supabase;
  }
}
