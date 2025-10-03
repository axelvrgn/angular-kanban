import { IColumn } from './models/column.model';

export const EXAMPLE_COLUMNS: IColumn[] = [
  {
    id: 1,
    title: 'À faire',
    userStories: [
      {
        id: 1,
        idColumn: 1,
        name: 'Style CSS',
        description: `
**Objectif :**
Mettre en place une feuille de style SCSS responsive pour l'ensemble de l'application.

**Spécifications :**
- Définir une palette de couleurs et des variables SCSS globales.
- Appliquer un design responsive (mobile, tablette, desktop) sur toutes les pages.
- Utiliser Flexbox et Grid pour la mise en page.
- Respecter la charte graphique fournie.
- Ajouter des animations légères sur les boutons et transitions de colonnes.
- S'assurer de la compatibilité avec les navigateurs modernes (Chrome, Firefox, Edge, Safari).

**Critères d'acceptation :**
- L'application est utilisable et lisible sur mobile, tablette et desktop.
- Les couleurs et polices sont cohérentes sur toutes les pages.
- Les styles sont centralisés et réutilisables.
- Score Lighthouse > 90 en accessibilité et performance.
- Aucun style inline ou CSS dupliqué.
`,
      },
    ],
  },
  {
    id: 2,
    title: 'En cours',
    userStories: [
      {
        id: 2,
        idColumn: 2,
        name: 'Tableau Kanban',
        description: `
**Objectif :**
Développer le composant principal du tableau Kanban pour la gestion des tickets.

**Spécifications :**
- Afficher dynamiquement les colonnes et les tickets à partir d'une structure de données.
- Permettre le drag & drop des tickets entre colonnes avec Angular CDK.
- Afficher le nombre de tickets par colonne.
- Gérer l'ajout, la suppression et l'édition de tickets.
- Afficher un message si une colonne est vide.
- Prévoir une gestion des erreurs lors du drag & drop.

**Critères d'acceptation :**
- Les tickets peuvent être déplacés entre colonnes sans rechargement de la page.
- L'état du tableau est mis à jour en temps réel.
- Les tickets sont persistés (en mémoire ou via API).
- L'UI reste fluide même avec 50+ tickets.
`,
      },
    ],
  },
  {
    id: 3,
    title: 'À tester',
    userStories: [],
  },
  {
    id: 4,
    title: 'Terminé',
    userStories: [
      {
        id: 3,
        idColumn: 4,
        name: 'Authentification',
        description: `
**Objectif :**
Permettre à un utilisateur de se connecter via email/mot de passe avec Supabase.

**Spécifications :**
- Intégrer Supabase Auth dans l'application Angular.
- Créer un formulaire de connexion avec validation des champs.
- Afficher les erreurs d'authentification (mauvais mot de passe, email inconnu, etc.).
- Gérer l'état de connexion (affichage conditionnel du contenu).
- Rediriger l'utilisateur connecté vers le tableau Kanban.
- Prévoir la déconnexion.

**Critères d'acceptation :**
- Un utilisateur peut se connecter et se déconnecter sans recharger la page.
- Les erreurs sont affichées de façon claire.
- L'utilisateur non connecté n'a pas accès au tableau Kanban.
`,
      },
      {
        id: 4,
        idColumn: 4,
        name: 'Inscription',
        description: `
**Objectif :**
Permettre la création de compte utilisateur avec validation d'email.

**Spécifications :**
- Créer un formulaire d'inscription avec email et mot de passe.
- Valider la force du mot de passe (8+ caractères, majuscule, chiffre).
- Afficher un message de confirmation après inscription.
- Gérer la validation d'email via Supabase (auto-confirm ou email de validation).
- Afficher les erreurs (email déjà utilisé, mot de passe faible, etc.).

**Critères d'acceptation :**
- Un nouvel utilisateur peut s'inscrire et se connecter immédiatement (si auto-confirm).
- Les erreurs sont affichées clairement.
- L'utilisateur reçoit un email de confirmation si nécessaire.
`,
      },
    ],
  },
];
