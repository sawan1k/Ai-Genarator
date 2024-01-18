const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-fit">{children}</div>
  );
};

export default AuthLayout;
