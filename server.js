import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

// Khởi tạo Supabase client
const SUPABASE_URL = "https://zpsiohjshqnyovlckmpg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpwc2lvaGpzaHFueW92bGNrbXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMjM2MzgsImV4cCI6MjA1ODc5OTYzOH0.n0RVmAtbybEILnwB1aE2mLD8KIFKkFU2lqDGcREBV34"; // Thay bằng key của bạn
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const app = express();
app.use(cors());

app.get("/api/flower", async (req, res) => {
    const id = req.query.id;

    if (!id) {
        return res.status(400).json({ error: "Missing flower ID" });
    }

    // Truy vấn dữ liệu từ Supabase
    const { data, error } = await supabase
        .from("flowers")
        .select("name, image, description")
        .eq("id", id)
        .single();

    if (error || !data) {
        return res.status(404).json({ message: "Flower not found" });
    }

    res.json(data);
});

app.listen(5000, () => console.log("🌸 API is running on port 5000"));
