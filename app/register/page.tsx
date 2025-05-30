'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [alias, setAlias] = useState('')
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('+54')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showUidField, setShowUidField] = useState(false)
  const [uid, setUid] = useState('')
  const [error, setError] = useState('')
  
  const { signUp, loading } = useAuth()
  const router = useRouter()
  
  const handleBitgetChange = (value: string) => {
    setShowUidField(value === 'yes')
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      // Registrar al usuario con Supabase
      await signUp(email, password, alias)
      
      // Aquí podrías guardar información adicional en Supabase si lo necesitas
      // como país, teléfono, UID de BitGet, etc.
      
      router.push('/') // Redirigir al inicio después del registro exitoso
    } catch (error: any) {
      setError(error.message || 'Error al registrarse')
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
            Registrarse
          </h2>
          
          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-sm text-red-200">
              {error}
            </div>
          )}
          
          {/* Register Form */}
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
              <label htmlFor="alias" className="block text-sm font-medium text-crypto-light mb-2">
                Alias
              </label>
              <input
                type="text"
                id="alias"
                name="alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-crypto-light mb-2">
                País
              </label>
              <select
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
              >
                <option value="">Selecciona tu país</option>
                <option value="AR">Argentina</option>
                <option value="BR">Brasil</option>
                <option value="MX">México</option>
                <option value="ES">España</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-crypto-light mb-2">
                Móvil (opcional)
              </label>
              <div className="flex gap-2">
                <select
                  id="country-code"
                  name="country-code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-24 px-2 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
                >
                  <option value="+54">+54</option>
                  <option value="+55">+55</option>
                  <option value="+52">+52</option>
                  <option value="+34">+34</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Número de móvil"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
                />
              </div>
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
            
            <div>
              <label className="block text-sm font-medium text-crypto-light mb-2">
                ¿Tienes cuenta en #BitGet?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="bitget-account"
                    value="yes"
                    onChange={(e) => handleBitgetChange(e.target.value)}
                    className="text-crypto-blue focus:ring-crypto-blue"
                  />
                  <span className="text-crypto-light">Sí</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="bitget-account"
                    value="no"
                    onChange={(e) => handleBitgetChange(e.target.value)}
                    className="text-crypto-blue focus:ring-crypto-blue"
                  />
                  <span className="text-crypto-light">No</span>
                </label>
              </div>
            </div>
            
            {showUidField && (
              <div>
                <label htmlFor="uid" className="block text-sm font-medium text-crypto-light mb-2">
                  UID de BitGet
                </label>
                <input
                  type="text"
                  id="uid"
                  name="uid"
                  value={uid}
                  onChange={(e) => setUid(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-crypto-light placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-crypto-blue focus:border-transparent"
                />
              </div>
            )}
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrarse'}
            </Button>
          </form>
          
          {/* Login Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            ¿Ya tienes una cuenta?{' '}
            <Link href="/login" className="text-crypto-blue hover:text-crypto-blue/80 transition-colors">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}