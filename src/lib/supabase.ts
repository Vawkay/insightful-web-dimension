
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://njzimoazoxwthyktjycr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qemltb2F6b3h3dGh5a3RqeWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTY2NzMsImV4cCI6MjA1ODU3MjY3M30.lYNRr5Ptz7WxC0r9Y0V0orv_NXzdWs0MOU5veMQztR8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
