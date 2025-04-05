import { createClient } from '@supabase/supabase-js';

// 🔹 Thay thế bằng thông tin của bạn
const SUPABASE_URL = 'https://zpsiohjshqnyovlckmpg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwc2lvaGpzaHFueW92bGNrbXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMjM2MzgsImV4cCI6MjA1ODc5OTYzOH0.n0RVmAtbybEILnwB1aE2mLD8KIFKkFU2lqDGcREBV34'; // Dùng anon key

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function getFlowers() {
    const { data, error } = await supabase
        .from('flowers')  // Đổi 'flowers' thành đúng tên bảng của bạn
        .select('*');      // Chọn tất cả cột để xem có dữ liệu không

    if (error) {
        console.error('❌ Lỗi Supabase:', error);
        return;
    }

    console.log('🌸 Danh sách hoa:', data);
}

getFlowers();
