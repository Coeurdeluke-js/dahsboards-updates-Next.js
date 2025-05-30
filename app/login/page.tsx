'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, loading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      await login(email, password)
      router.push('/') // Redirigir al inicio después del login exitoso
    } catch (error: any) {
      setError(error.message || 'Error al iniciar sesión')
    }
  }

  return (
    <div className="min-h-screen bg-crypto-dark relative overflow-hidden">
      {/* Triangle Background */}
      <div className="triangle-background" />
      
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-md mx-auto mt-20 p-6 bg-crypto-dark/80 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-800">
          {/* Logo */}
          <div className="text-center mb-6">
            <Image
              src="/logo.png"
              alt="Crypto Force Logo"
              width={180}
              height={60}
              className="mx-auto drop-shadow-lg"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-center text-crypto-light mb-6">
            Iniciar Sesión
          </h2>
          
          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-sm text-red-200">
              {error}
            </div>
          )}
          
          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-crypto-light mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-crypto-light mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </form>
          
          {/* Separator */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-3 text-sm text-gray-400">o</span>
            <div className="flex-1 border-t border-gray-600"></div>
          </div>
          
          {/* Register Link */}
          <p className="text-center text-sm text-gray-400">
            ¿No tienes una cuenta?{' '}
            <Link href="/register" className="text-crypto-blue hover:text-crypto-blue/80 transition-colors">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}