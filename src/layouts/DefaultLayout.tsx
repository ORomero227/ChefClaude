import Footer from "@components/Footer";
import Header from "@components/Header";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="min-h-screen bg-[#FAFAF8] flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
