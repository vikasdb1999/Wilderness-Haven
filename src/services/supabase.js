import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://aonjabasluujuonhhnkt.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbmphYmFzbHV1anVvbmhobmt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0ODk1NDIsImV4cCI6MjAxMzA2NTU0Mn0.gvcSPPSQrVzTbdrln1STH2tvInxzBTHkdaS-7nL9vcI"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;