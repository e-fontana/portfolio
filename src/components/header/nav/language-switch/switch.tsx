'use client'
import { BrazilFlag } from '@/assets/nav/brazil'
import { USFlag } from '@/assets/nav/us'
import { Switch } from '@components/ui/switch'
import { useState } from 'react'

export const SwitchComponent = () => {
  const [value, setValue] = useState(false)

  const handleChange = () => setValue(!value)

  return (
    <div className="flex items-center space-x-2">
      <USFlag width={24} height={24} />
      <Switch
        id="language-switch"
        className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-pink-900"
        onChange={handleChange}
      />
      <BrazilFlag width={24} height={24} />
    </div>
  )
}
