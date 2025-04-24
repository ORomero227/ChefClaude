import { RegisterForm } from "@/components/RegisterForm";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Register() {
  return (
    <DefaultLayout>
      <div className="flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm">
          <RegisterForm />
        </div>
      </div>
    </DefaultLayout>
  );
}
