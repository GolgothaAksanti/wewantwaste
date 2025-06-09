interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <main className="relative flex min-h-screen w-7/12 mx-auto flex-col items-start justify-start bg-light text-neutral-800">
      <section className="relative flex w-full flex-col items-start justify-start">
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
