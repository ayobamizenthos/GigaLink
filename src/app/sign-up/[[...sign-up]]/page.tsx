import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] p-6">
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: 'bg-[#09090B] hover:bg-gray-800 text-sm font-black uppercase tracking-widest rounded-2xl py-4',
            card: 'shadow-2xl border-none rounded-[32px]',
            headerTitle: 'font-black tracking-tighter uppercase text-3xl',
            headerSubtitle: 'font-bold text-gray-500',
            socialButtonsBlockButton: 'rounded-2xl border-gray-100 hover:bg-gray-50 transition-all font-bold',
            formFieldInput: 'rounded-2xl border-gray-100 py-4 font-bold focus:border-[#09090B]/20 transition-all'
          }
        }}
        signInUrl="/sign-in"
        forceRedirectUrl="/onboarding"
      />
    </div>
  );
}
