import { LoginForm } from "@/components/LoginForm";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Login() {
  return (
    <DefaultLayout>
      <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </DefaultLayout>
  );
}
