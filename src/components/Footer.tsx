import { AppConfig } from '@/utils/AppConfig';

export default function Footer() {
  return (
    <footer className="invisible mt-10 border-t border-zinc-500 py-8 text-center text-sm md:visible">
      © Copyright {new Date().getFullYear()} {AppConfig.title}.
    </footer>
  );
}
