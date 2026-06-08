import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nbzhardlppiylskmnkdr.supabase.co'
const supabaseAnonKey = 'sb_publishable_ricDqK9GKhCD5lcCKADOSg_AIyaH4rk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
