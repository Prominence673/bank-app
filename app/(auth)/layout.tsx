import Background from "./_components/AuthBackground";
import Icon from "./_components/AuthBrand";
import Text from "./_components/AuthHero";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#0d1130] flex overflow-hidden">
      <Background />

      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between relative z-10">
        <Icon />
        <Text />
      </div>

      <main className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end relative z-20">
        {children}
      </main>
    </div>
  );
}