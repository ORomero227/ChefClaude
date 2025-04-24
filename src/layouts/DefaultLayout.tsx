import Footer from "@components/Footer";
import Header from "@components/Header";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
