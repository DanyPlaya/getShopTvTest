import { YoutubeEmbed } from "@/features/youtubePlayes";
import cls from "./main.module.css";
export const MainPage = () => {
  return (
    <main className={cls.main}>
      <YoutubeEmbed height="720px" width="1280px" embedId="M7FIvfx5J10" />
    </main>
  );
};
