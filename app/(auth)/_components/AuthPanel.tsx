'use client';

import { useState } from 'react';

interface AuthFormProps {
  onSuccess?: () => void;
}

export default function AuthForm({ onSuccess }: AuthFormProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSuccess) onSuccess();
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-y-auto lg:w-1/2 items-center justify-center bg-[#07091a] px-6 py-6 ml-auto">
      {/* Mobile logo */}
      <div className="flex items-center gap-2 mb-6 lg:hidden">
        <div className="w-7 h-7 rounded-lg bg-[#4f8eff] flex items-center justify-center">
          <span className="text-white font-bold text-xs">V</span>
        </div>
        <span className="font-serif text-lg text-[#e8eaf2]">Valore</span>
      </div>

      <div className="w-full max-w-[360px]">
        {/* Tab toggle */}
        <div className="flex p-1 rounded-xl mb-5 bg-white/5">
          {(['login', 'register'] as const).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                mode === m
                  ? 'bg-[#4f8eff] text-white shadow-md shadow-[#4f8eff]/20'
                  : 'bg-transparent text-[#6b7494] hover:text-[#e8eaf2]'
              }`}
            >
              {m === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}
            </button>
          ))}
        </div>

        {/* Title */}
        <div className="mb-5">
          <h1 className="font-serif text-2xl text-[#e8eaf2] tracking-tight mb-1">
            {mode === 'login' ? 'Bienvenido de vuelta' : 'Abre tu cuenta hoy'}
          </h1>
          <p className="text-xs text-[#6b7494] leading-normal">
            {mode === 'login'
              ? 'Accede a tu panel con tus credenciales.'
              : 'Regístrate gratis y sin comisiones ocultas.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mb-4">
            {/* Campo: Nombre Completo (Solo registro) */}
            {mode === 'register' && (
              <div>
                <label className="block text-[10px] font-medium mb-1 text-[#9ba3c4] tracking-wider">
                  NOMBRE COMPLETO
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Elena Vidal"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-[#e8eaf2] placeholder:text-[#6b7494] outline-none transition-all focus:border-[#4f8eff]/50 focus:bg-[#4f8eff]/5"
                />
              </div>
            )}

            {/* Campo: Email */}
            <div>
              <label className="block text-[10px] font-medium mb-1 text-[#9ba3c4] tracking-wider">
                CORREO ELECTRÓNICO
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="elena@correo.com"
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white/5 border border-white/10 text-[#e8eaf2] placeholder:text-[#6b7494] outline-none transition-all focus:border-[#4f8eff]/50 focus:bg-[#4f8eff]/5"
              />
            </div>

            {/* Campo: Contraseña */}
            <div>
              <label className="block text-[10px] font-medium mb-1 text-[#9ba3c4] tracking-wider">
                CONTRASEÑA
              </label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-3.5 py-2.5 pr-10 rounded-xl text-xs bg-white/5 border border-white/10 text-[#e8eaf2] placeholder:text-[#6b7494] outline-none transition-all focus:border-[#4f8eff]/50 focus:bg-[#4f8eff]/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 text-[11px] transition-colors ${
                    showPass ? 'text-[#4f8eff]' : 'text-[#6b7494] hover:text-[#e8eaf2]'
                  }`}
                >
                  {showPass ? 'Ocultar' : 'Ver'}
                </button>
              </div>
            </div>

            {/* Campo: Confirmar contraseña (Solo registro) */}
            {mode === 'register' && (
              <div>
                <label className="block text-[10px] font-medium mb-1 text-[#9ba3c4] tracking-wider">
                  CONFIRMAR CONTRASEÑA
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    value={form.confirm}
                    onChange={(e) => setForm((f) => ({ ...f, confirm: e.target.value }))}
                    placeholder="Repite la contraseña"
                    className="w-full px-3.5 py-2.5 pr-10 rounded-xl text-xs bg-white/5 border border-white/10 text-[#e8eaf2] placeholder:text-[#6b7494] outline-none transition-all focus:border-[#4f8eff]/50 focus:bg-[#4f8eff]/5"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((p) => !p)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 text-[11px] transition-colors ${
                      showConfirm ? 'text-[#4f8eff]' : 'text-[#6b7494] hover:text-[#e8eaf2]'
                    }`}
                  >
                    {showConfirm ? 'Ocultar' : 'Ver'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Olvidé contraseña */}
          {mode === 'login' && (
            <div className="text-right mb-4">
              <button
                type="button"
                className="text-[11px] text-[#4f8eff] hover:underline transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
          )}

          {/* Términos y condiciones */}
          {mode === 'register' && (
            <div className="flex items-start gap-2.5 mb-4">
              <div className="w-3.5 h-3.5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center bg-[#4f8eff]">
                <span className="text-white text-[9px]">✓</span>
              </div>
              <p className="text-[11px] text-[#6b7494] leading-tight">
                Acepto los{' '}
                <span className="text-[#4f8eff] cursor-pointer hover:underline">
                  términos
                </span>{' '}
                y la{' '}
                <span className="text-[#4f8eff] cursor-pointer hover:underline">
                  privacidad
                </span>.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#4f8eff] to-[#2563eb] shadow-md shadow-[#4f8eff]/25 transition-all active:scale-[0.98] mb-4 hover:brightness-110"
          >
            {mode === 'login' ? 'Entrar a mi cuenta' : 'Crear cuenta gratis'}
          </button>
        </form>

        {/* Divisor */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[11px] text-[#6b7494]">o continúa con</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Botones Sociales */}
        <div className="grid grid-cols-2 gap-2.5 mb-5">
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-[#9ba3c4] hover:bg-white/10 hover:text-[#e8eaf2] transition-all"
          >
            <span className="font-bold">G</span> Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-[#9ba3c4] hover:bg-white/10 hover:text-[#e8eaf2] transition-all"
          >
            <span className="font-bold"></span> Apple
          </button>
        </div>

        {/* Switch Mode Footer */}
        <p className="text-center text-[11px] text-[#6b7494]">
          {mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <button
            type="button"
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="font-medium text-[#4f8eff] hover:underline transition-colors ml-1"
          >
            {mode === 'login' ? 'Regístrate gratis' : 'Inicia sesión'}
          </button>
        </p>
      </div>
    </div>
  );
}