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
        description:
          'Créer et appliquer une feuille de style SCSS responsive pour harmoniser l’apparence de toutes les pages du projet, en respectant la charte graphique.',
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
        description:
          'Développer le composant principal du tableau Kanban permettant d’afficher dynamiquement les colonnes et de gérer le drag & drop des tickets entre colonnes.',
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
        description:
          'Intégrer l’authentification par email et mot de passe avec Supabase, gérer l’état de connexion et la redirection de l’utilisateur après login.',
      },
      {
        id: 4,
        idColumn: 4,
        name: 'Inscription',
        description:
          'Permettre la création de compte utilisateur avec validation d’email, gestion des erreurs et affichage d’un message de confirmation.',
      },
    ],
  },
];
