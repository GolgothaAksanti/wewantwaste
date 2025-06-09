type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <main className="relative flex min-h-screen  flex-col items-start justify-start bg-black text-white">
      <section className="relative">{children}</section>
    </main>
  );
};

export default AppLayout;
