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
<h3>Objectif</h3>
<p>Mettre en place une feuille de style SCSS responsive pour l'ensemble de l'application.</p>
<h3>Spécifications</h3>
<ul>
  <li>Définir une palette de couleurs et des variables SCSS globales.</li>
  <li>Appliquer un design responsive (mobile, tablette, desktop) sur toutes les pages.</li>
  <li>Utiliser Flexbox et Grid pour la mise en page.</li>
  <li>Respecter la charte graphique fournie.</li>
  <li>Ajouter des animations légères sur les boutons et transitions de colonnes.</li>
  <li>S'assurer de la compatibilité avec les navigateurs modernes (Chrome, Firefox, Edge, Safari).</li>
</ul>
<h3>Critères d'acceptation</h3>
<ul>
  <li>L'application est utilisable et lisible sur mobile, tablette et desktop.</li>
  <li>Les couleurs et polices sont cohérentes sur toutes les pages.</li>
  <li>Les styles sont centralisés et réutilisables.</li>
  <li>Score Lighthouse &gt; 90 en accessibilité et performance.</li>
  <li>Aucun style inline ou CSS dupliqué.</li>
</ul>
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
<h3>Objectif</h3>
<p>Développer le composant principal du tableau Kanban pour la gestion des tickets.</p>
<h3>Spécifications</h3>
<ul>
  <li>Afficher dynamiquement les colonnes et les tickets à partir d'une structure de données.</li>
  <li>Permettre le <strong>drag &amp; drop</strong> des tickets entre colonnes avec Angular CDK.</li>
  <li>Afficher le nombre de tickets par colonne.</li>
  <li>Gérer l'ajout, la suppression et l'édition de tickets.</li>
  <li>Afficher un message si une colonne est vide.</li>
  <li>Prévoir une gestion des erreurs lors du drag &amp; drop.</li>
</ul>
<h3>Critères d'acceptation</h3>
<ul>
  <li>Les tickets peuvent être déplacés entre colonnes sans rechargement de la page.</li>
  <li>L'état du tableau est mis à jour en temps réel.</li>
  <li>Les tickets sont persistés (en mémoire ou via API).</li>
  <li>L'UI reste fluide même avec 50+ tickets.</li>
</ul>
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
<h3>Objectif</h3>
<p>Permettre à un utilisateur de se connecter via email/mot de passe avec Supabase.</p>
<h3>Spécifications</h3>
<ul>
  <li>Intégrer Supabase Auth dans l'application Angular.</li>
  <li>Créer un formulaire de connexion avec validation des champs.</li>
  <li>Afficher les erreurs d'authentification (mauvais mot de passe, email inconnu, etc.).</li>
  <li>Gérer l'état de connexion (affichage conditionnel du contenu).</li>
  <li>Rediriger l'utilisateur connecté vers le tableau Kanban.</li>
  <li>Prévoir la déconnexion.</li>
</ul>
<h3>Critères d'acceptation</h3>
<ul>
  <li>Un utilisateur peut se connecter et se déconnecter sans recharger la page.</li>
  <li>Les erreurs sont affichées de façon claire.</li>
  <li>L'utilisateur non connecté n'a pas accès au tableau Kanban.</li>
</ul>
`,
      },
      {
        id: 4,
        idColumn: 4,
        name: 'Inscription',
        description: `
<h3>Objectif</h3>
<p>Permettre la création de compte utilisateur avec validation d'email.</p>
<h3>Spécifications</h3>
<ul>
  <li>Créer un formulaire d'inscription avec email et mot de passe.</li>
  <li>Valider la force du mot de passe (8+ caractères, majuscule, chiffre).</li>
  <li>Afficher un message de confirmation après inscription.</li>
  <li>Gérer la validation d'email via Supabase (auto-confirm ou email de validation).</li>
  <li>Afficher les erreurs (email déjà utilisé, mot de passe faible, etc.).</li>
</ul>
<h3>Critères d'acceptation</h3>
<ul>
  <li>Un nouvel utilisateur peut s'inscrire et se connecter immédiatement (si auto-confirm).</li>
  <li>Les erreurs sont affichées clairement.</li>
  <li>L'utilisateur reçoit un email de confirmation si nécessaire.</li>
</ul>
`,
      },
    ],
  },
];
