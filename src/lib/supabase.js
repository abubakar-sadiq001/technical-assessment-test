import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rlhlifvacyznmbnxcxjb.supabase.co";
const anonKey = "sb_publishable_eiTlxzAzfWLYT9o6VL3llA_QzX_Z8sv";
export const supabase = createClient(supabaseUrl, anonKey);
