# Microservices - Description

## 1. auth-service

Gère l’authentification et la sécurité des utilisateurs.

- 🔐 Signup / Login / Logout
- 🔄 Refresh token
- 🧾 JWT / OAuth2 (Token-based auth)
- 🔒 Hashing des mots de passe (bcrypt)

---

## 2. user-service

Gère les données des utilisateurs (candidats + employeurs).

- 👤 CRUD utilisateur
- 🧑‍💼 Mise à jour profil
- 🛡️ Vérification des rôles (RBAC)
- 🔎 Recherche d’utilisateurs (pour admin)

---

## 3. offre-service

Gère les offres d’emploi postées par les employeurs.

- 📤 Publication d’offres
- ✏️ Modification / Suppression d’offres
- 🔍 Listing filtré d’offres (matching ou simple)
- 🧩 Liaison avec applications et matching-service

---

## 4. cv-service

Gère l’upload, le stockage, et l’analyse des CVs.

- 📎 Upload CV (PDF) → GridFS
- 🧠 Extraction de texte brut
- 🛠️ CRUD CVs (MongoDB)
- 📌 Lien avec user-service via user_id

---

## 5. matching-service

Gère la logique de matching entre CVs et offres.

- 🔁 Matching automatique (CV ↔ Offres)
- 📊 Score de compatibilité
- 📝 Justification du score
- 💾 Stockage des résultats dans MongoDB

---

## 6. ai-service

Gère toutes les fonctionnalités d’IA.

- 🤖 Extraction des compétences (NLP)
- 🧠 Embeddings (sentence-transformers)
- ✍️ Génération de lettres de motivation (OpenAI)
- 📊 Analyse sémantique du CV + Offre

---

## 7. admin-service

Gère les fonctions réservées à l’administrateur.

- 🗑️ Suppression utilisateurs / offres
- 📈 Statistiques globales (utilisateurs, matching, etc.)
- 👀 Logs / monitoring basique
- 🔧 Configuration plateforme (optionnel)
