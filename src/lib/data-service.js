import { supabase } from "./supabase";

const title = "Welcome 👋";
const messagage =
  "We're thrilled to have you on board! Explore powerful tools, build your personal stack, and start unlocking rewards through daily streaks, referrals, and more. Your journey to smarter productivity starts here.";
const referralCode = crypto.randomUUID().slice(0, 8);
// const referredBy = 0;

export async function getWeekDays() {
  const { data, error } = await supabase
    .from("weekDays")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  //   console.log(data);
  return data;
}

export async function getProfileData(userID) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userID)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  // console.log(data);
  return data;
}

// // CONCERN
// export async function claimPoints(id) {
//   const { data, error } = await supabase
//     .from("weekDays")
//     .update({ isClaimed: true })
//     .eq("id", id)
//     .select()
//     .single();

//   if (error) {
//     throw new Error("Error", error.message);
//   }

//   console.log(id);
//   return data;
// }

// REDEEM REWARDS
export async function getRedeems() {
  const { data: rewards, error } = await supabase
    .from("redeem_rewards")
    .select("*");

  if (error) {
    throw new Error("Error", error.message);
  }

  return rewards;
}

// SIGN UP
export async function signup({ email, password, referredBy }) {
  const { data: profile } = await supabase.from("profiles").select("email");
  const duplicateEmail = profile?.some(
    (p) => p.email != null && p.email === email,
  );
  // console.log(referredBy);

  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (!duplicateEmail) {
    // insert profile data
    await supabase
      .from("profiles")
      .insert({
        referral_code: referralCode,
        referred_by: referredBy || null,
        user_id: data?.user?.id,
        email,
      })
      .eq("user_id", data?.user?.id);

    // // insert notification
    await supabase
      .from("notifications")
      .insert({
        title: title,
        message: messagage,
        is_read: false,
        user_id: data?.user?.id,
      })
      .eq("user_id", data?.user?.id);

    // find referrer and reward
    const { data: referrer } = await supabase
      .from("profiles")
      .select("id, referral_points, referrals_count, user_id")
      .eq("referral_code", referredBy)
      .single();

    if (referrer) {
      await supabase
        .from("profiles")
        .update({
          referral_points: referrer.referral_points + 25,
          referrals_count: referrer.referrals_count + 1,
        })
        .eq("user_id", referrer?.user_id);
    }
  }

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

// SIGN IN
export async function signin({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

// LOGGED IN USER
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getUser();
  if (!session.user) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

// SIGN OUT
export async function signout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

//  GET NOIFICATION
export async function getUserNotification(userID) {
  const { data: notification, error } = await supabase
    .from("notifications")
    .select("*")
    .eq("user_id", userID)
    .order("id", { ascending: true });

  if (error) throw new Error(error.message);

  // console.log(notification);
  return notification;
}

// DELETE NOTIFICATION
export async function deleteNotification({ notifId, userId }) {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("id", notifId)
    .eq("user_id", userId);

  // console.log(userId);
  if (error) throw new Error(error.message);
}

/// MARK ALL NOTIF AS READ
export async function markAll(userId) {
  const { error } = await supabase
    .from("notifications")
    .update({ is_read: true })
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
}

// DELETE ALL NOTIF
export async function deleteAllNotif(userId) {
  const { error } = await supabase
    .from("notifications")
    .delete()
    .eq("user_id", userId);

  if (error) throw new Error(error.message);
}
