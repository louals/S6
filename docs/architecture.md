# Architecture Technique de la Plateforme IA de Matching Candidats ↔ Employeurs

## 🧱 Structure Générale

La plateforme est conçue selon une architecture **microservices** pour séparer les responsabilités, améliorer la scalabilité et faciliter le développement.

---

## 📦 Microservices (Back-end)

| Microservice       | Description |
|--------------------|-------------|
| **auth-service**   | Gère l’authentification via OAuth2 + JWT |
| **user-service**   | CRUD utilisateurs (employeurs, candidats) |
| **offre-service**  | Gestion des offres d’emploi |
| **cv-service**     | Upload, parsing et stockage de CV |
| **matching-service** | Logiciel de matching entre CVs et offres |
| **ai-service**     | Extraction de compétences et génération de lettres de motivation |
| **admin-service**  | Dashboard pour l’admin + modération |

Tous ces services communiquent via des **API REST** (FastAPI).

---

## 🗃️ Bases de Données

| Base                 | Technologie | Contenu |
|----------------------|-------------|---------|
| PostgreSQL           | Supabase/Railway | Utilisateurs, Offres, Candidatures |
| MongoDB (Atlas)      | MongoDB     | CVs, Données IA, Résultats de matching |
| GridFS ou S3         | MongoDB ou AWS | Stockage de fichiers PDF des CVs |

---

## 🎯 Frontend

| Plateforme | Stack | Description |
|------------|-------|-------------|
| Web        | React.js + Vite + TailwindCSS | Interface candidat/employeur/admin |
| Mobile (bonus) | React Native (Expo) | Application mobile si temps disponible |

---

## 🤖 Intelligence Artificielle

| Composant | Outils |
|----------|--------|
| Extraction compétences | spaCy, Transformers |
| Matching offres ↔ CVs | sentence-transformers, scikit-learn |
| Lettre de motivation auto | OpenAI GPT-4 API |

---

## ☁️ DevOps / Déploiement

| Outil               | Rôle |
|---------------------|------|
| Docker              | Conteneurisation des microservices |
| GitHub Actions      | CI/CD automatique |
| Railway, Render, Supabase | Hébergement |
| Kubernetes (option) | Orchestration (si temps) |

---

## 🔐 Sécurité

- Authentification OAuth2 + JWT
- RBAC (Role-Based Access Control)
- Chiffrement AES-256 pour les infos sensibles

---

## 🔄 Communication entre Services

- REST API (FastAPI)
- Authentification via token JWT
- Utilisation de `requests` ou `httpx` pour faire dialoguer les services
