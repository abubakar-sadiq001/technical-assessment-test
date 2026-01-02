# Rewards Page (React + Supabase)

This project is a recreation of the **Rewards page** from the Flowva platform, built as part of a technical assessment for the React Full-Stack Developer role.

The focus is on **UI accuracy**, **real functionality**, and **meaningful Supabase usage**.

---

## Tech Stack

- **Frontend:** React
- **Backend & Database:** Supabase
- **Authentication:** Supabase Auth (email/password)
- **Styling:** Tailwind CSS

---

## Features Implemented

### Authentication

- Email and password signup & login
- Protected dashboard routes

### Rewards System

- Points balance stored in the database
- Daily check-in rewards (+5 points)
- Progress bar toward gift rewards
- Proper handling of loading, empty, and error states

### Daily Streak

- Streak increments only when a user checks in on consecutive days
- Missing a day resets the streak
- Logic is based on `last_claimed_at`, not UI state

### Referrals

- Each user has a unique referral code
- Referral links are generated using query parameters
- Successful referrals reward the referrer with points
- Referral count tracked per user

### Notifications

- Welcome notification created on signup
- Notifications fetched per authenticated user
- Read/unread state supported

### UI & Layout

- Full dashboard layout with side navigation
- Seven pages recreated to match the platform structure
- Rewards page fully functional
- Other pages implemented as placeholders
- Fully responsive design

---

## Database Structure (Supabase)

### `profiles`

- `id` (auth user id)
- `points`
- `streak`
- `last_claimed_at`
- `referral_code`
- `referrals_count`
- `created_at`

### `notifications`

- `id`
- `user_id`
- `title`
- `message`
- `is_read`
- `created_at`

---

## Key Logic Decisions

- Points and streaks are stored and updated in the database, not derived from UI state
- Daily streaks reset automatically if a user misses a day
- Referral rewards are granted only once per referred user
- Notifications are created during onboarding to demonstrate event-based logic
- Only the Rewards page is fully functional to keep the scope focused

---

## Quick Setup

1. Clone the repository

   ```bash
   git clone https://github.com/abubakar-sadiq001/technical-assessment-test

   ```

2. Install dependency

   ```bash
    npm install

   ```

3. Create a Supabase project

   ```bash
   npm install @supabase/supabase-js

   ```

4. Add your Supabase keys to .env variables

   ```bash
   SUPABASE_URL = [Your supabase url]
   SUPABASE_ANON_KEY = [Your supabase anon key]

   ```

5. Run the project
   ```bash
   npm run dev
   ```
