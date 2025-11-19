import { redirect } from "next/navigation";
import { routing } from "./i18n/routing";

export default function RootPage() {
  // إعادة توجيه المستخدم إلى الـ locale الافتراضي
  redirect(`/${routing.defaultLocale}`);
}
