import { supabase } from "./supabase";

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

export async function getProfileData() {
  const { data, error } = await supabase.from("profiles").select("*");

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

// SINN UP
export async function signup({ email, password }) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}
