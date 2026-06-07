
import LoginForm from "../../component/auth/LoginForm";

const LoginPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4 py-4 sm:px-6 lg:px-8">
  <div className="mx-auto flex min-h-[90vh] max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.4)]">

    {/* LEFT SIDE */}
    <div
      className="relative hidden lg:flex lg:w-1/2 bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?auto=format&fit=crop&w=1400&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      <div className="relative z-10 flex flex-col justify-between p-10 text-white">
        <div>
          <h1 className="text-5xl font-black tracking-tight">
            Face<span className="text-sky-400">hook</span>
          </h1>

          <p className="mt-4 max-w-md text-slate-300 leading-relaxed">
            Connect, share, react and engage with your friends through a
            modern social networking experience.
          </p>
        </div>

        <div>
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="text-sm">
              🚀 Social Media Platform
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex w-full items-center justify-center p-5 sm:p-8 lg:w-1/2 lg:p-12">
      <div className="w-full max-w-md">

        {/* Mobile Logo */}
        <div className="mb-8 text-center lg:hidden">
          <h1 className="text-4xl font-black text-white">
            Face<span className="text-sky-400">hook</span>
          </h1>

          <p className="mt-2 text-slate-400">
            Social media for everyone
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  </div>
</section>
  );
};

export default LoginPage;