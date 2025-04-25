import Footer from "@components/Footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#f0fdf4]">
      <main className="flex-1">
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
