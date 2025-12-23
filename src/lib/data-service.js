import { supabase } from "./supabase";

export async function getWeekDays() {
  const { data, error } = await supabase.from("weekDays").select("*");

  if (error) {
    throw new Error(error.message);
  }

  //   console.log(data);
  return data;
}

export async function claimPoints(id) {
  const { data, error } = await supabase
    .from("weekDays")
    .update({ isClaimed: true })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error("Error", error.message);
  }

  console.log(id);
  return data;
}
